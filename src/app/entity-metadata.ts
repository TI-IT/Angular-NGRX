import {EntityDataModuleConfig, EntityMetadataMap} from '@ngrx/data'

const entityMetadata: EntityMetadataMap = {
  //Множественное число подставится само Product-Products
  Post: {
    entityDispatcherOptions: {
      optimisticUpdate: true,
      // optimisticAdd: true,
    }
  },
  Product: {
  }
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
};
