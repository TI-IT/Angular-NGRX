import {EntityDataModuleConfig, EntityMetadataMap} from '@ngrx/data'

const entityMetadata: EntityMetadataMap = {
  Post: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      // optimisticAdd: true,
    }
  },
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
};
