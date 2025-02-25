/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

/* eslint sort-keys: 'error' */

import type {FeatureFlagDefinitions} from './types';

// These flags are only used in tests for the feature flags system
const testDefinitions: FeatureFlagDefinitions = {
  common: {
    commonTestFlag: {
      defaultValue: false,
      description: 'Common flag for testing. Do NOT modify.',
    },
  },
  jsOnly: {
    jsOnlyTestFlag: {
      defaultValue: false,
      description: 'JS-only flag for testing. Do NOT modify.',
    },
  },
};

const definitions: FeatureFlagDefinitions = {
  common: {
    ...testDefinitions.common,

    batchRenderingUpdatesInEventLoop: {
      defaultValue: false,
      description:
        'When enabled, the RuntimeScheduler processing the event loop will batch all rendering updates and dispatch them together at the end of each iteration of the loop.',
    },
    enableBackgroundExecutor: {
      defaultValue: false,
      description:
        'Enables the use of a background executor to compute layout and commit updates on Fabric (this system is deprecated and should not be used).',
    },
    enableCustomDrawOrderFabric: {
      defaultValue: false,
      description:
        'When enabled, Fabric will use customDrawOrder in ReactViewGroup (similar to old architecture).',
    },
    enableFixForClippedSubviewsCrash: {
      defaultValue: false,
      description:
        'Attempt at fixing a crash related to subview clipping on Android. This is a kill switch for the fix',
    },
    enableMicrotasks: {
      defaultValue: false,
      description:
        'Enables the use of microtasks in Hermes (scheduling) and RuntimeScheduler (execution).',
    },
    enableMountHooksAndroid: {
      defaultValue: false,
      description:
        'Enables the notification of mount operations to mount hooks on Android.',
    },
    enableSpannableBuildingUnification: {
      defaultValue: false,
      description:
        'Uses new, deduplicated logic for constructing Android Spannables from text fragments',
    },
    inspectorEnableCxxInspectorPackagerConnection: {
      defaultValue: false,
      description:
        'Flag determining if the C++ implementation of InspectorPackagerConnection should be used instead of the per-platform one. This flag is global and should not be changed across React Host lifetimes.',
    },
    inspectorEnableHermesCDPAgent: {
      defaultValue: false,
      description:
        'Flag determining if the new Hermes CDPAgent API should be enabled in the modern CDP backend. This flag is global and should not be changed across React Host lifetimes.',
    },
    inspectorEnableModernCDPRegistry: {
      defaultValue: false,
      description:
        'Flag determining if the modern CDP backend should be enabled. This flag is global and should not be changed across React Host lifetimes.',
    },
    skipMountHookNotifications: {
      defaultValue: false,
      description:
        'This is a temporary flag to disable part of the mount hooks pipeline to investigate a crash.',
    },
    useModernRuntimeScheduler: {
      defaultValue: false,
      description:
        'When enabled, it uses the modern fork of RuntimeScheduler that allows scheduling tasks with priorities from any thread.',
    },
  },

  jsOnly: {
    ...testDefinitions.jsOnly,

    animatedShouldDebounceQueueFlush: {
      defaultValue: false,
      description:
        'Enables an experimental flush-queue debouncing in Animated.js.',
    },
    animatedShouldUseSingleOp: {
      defaultValue: false,
      description:
        'Enables an experimental mega-operation for Animated.js that replaces many calls to native with a single call into native, to reduce JSI/JNI traffic.',
    },
    enableAccessToHostTreeInFabric: {
      defaultValue: false,
      description:
        'Enables access to the host tree in Fabric using DOM-compatible APIs.',
    },
    isLayoutAnimationEnabled: {
      defaultValue: true,
      description:
        'Function used to enable / disabled Layout Animations in React Native.',
    },
    shouldUseAnimatedObjectForTransform: {
      defaultValue: false,
      description:
        'Enables use of AnimatedObject for animating transform values.',
    },
    shouldUseRemoveClippedSubviewsAsDefaultOnIOS: {
      defaultValue: false,
      description:
        'removeClippedSubviews prop will be used as the default in FlatList on iOS to match Android',
    },
    shouldUseSetNativePropsInFabric: {
      defaultValue: true,
      description: 'Enables use of setNativeProps in JS driven animations.',
    },
  },
};

export default definitions;
