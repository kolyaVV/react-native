/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<6a401351e670388135bec038018d3fe8>>
 * @flow strict-local
 */

/**
 * IMPORTANT: Do NOT modify this file directly.
 *
 * To change the definition of the flags, edit
 *   packages/react-native/scripts/featureflags/ReactNativeFeatureFlags.config.js.
 *
 * To regenerate this code, run the following script from the repo root:
 *   yarn featureflags-update
 */

import type {TurboModule} from '../../../Libraries/TurboModule/RCTExport';

import * as TurboModuleRegistry from '../../../Libraries/TurboModule/TurboModuleRegistry';

export interface Spec extends TurboModule {
  +commonTestFlag?: () => boolean;
  +batchRenderingUpdatesInEventLoop?: () => boolean;
  +enableBackgroundExecutor?: () => boolean;
  +enableCustomDrawOrderFabric?: () => boolean;
  +enableFixForClippedSubviewsCrash?: () => boolean;
  +enableMicrotasks?: () => boolean;
  +enableMountHooksAndroid?: () => boolean;
  +enableSpannableBuildingUnification?: () => boolean;
  +inspectorEnableCxxInspectorPackagerConnection?: () => boolean;
  +inspectorEnableHermesCDPAgent?: () => boolean;
  +inspectorEnableModernCDPRegistry?: () => boolean;
  +skipMountHookNotifications?: () => boolean;
  +useModernRuntimeScheduler?: () => boolean;
}

const NativeReactNativeFeatureFlags: ?Spec = TurboModuleRegistry.get<Spec>(
  'NativeReactNativeFeatureFlagsCxx',
);

export default NativeReactNativeFeatureFlags;
