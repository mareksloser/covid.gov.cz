<?php


namespace Drupal\covid\Field;


use Drupal;
use Drupal\Core\Field\FieldItemList;
use Drupal\Core\TypedData\ComputedItemListTrait;
use Drupal\covid\Helper\RegionHelper;

class SituationUpdateField extends FieldItemList {

  use ComputedItemListTrait;

  /**
   * @inheritDoc
   */
  protected function computeValue() {
    $node = $this->getParent()->getValue();

    if ($node->bundle() === 'situation') {

      $region = $node->field_region->entity;

      $pes = RegionHelper::getPES($region);

      $nextValidity = RegionHelper::getNextValidity($region);

      if (!$pes || !$nextValidity) {
        return;
      }

      $nextPes = $nextValidity->field_pes->entity;

      $langcode = Drupal::languageManager()->getCurrentLanguage()->getId();

      foreach ($node->field_updates->referencedEntities() as $update) {

        if ($update->hasTranslation($langcode)) {
          $update = $update->getTranslation($langcode);
        }

        if ($update->field_pes->entity->id() === $pes->id() && $update->field_pes_target->entity->id() === $nextPes->id()) {
          $value = $update->field_content[0]->getValue() + [
              'pes' => $nextPes->field_level->value,
              'valid_from' => $nextValidity->field_valid_from->value,
              'valid_to' => $nextValidity->field_valid_to->value
            ];

          $this->list[0] = $this->createItem(0, $value);

          return;
        }
      }
    }
  }

}