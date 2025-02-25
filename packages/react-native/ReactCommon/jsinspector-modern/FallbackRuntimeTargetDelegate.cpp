/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "FallbackRuntimeTargetDelegate.h"
#include "FallbackRuntimeAgentDelegate.h"

namespace facebook::react::jsinspector_modern {

FallbackRuntimeTargetDelegate::FallbackRuntimeTargetDelegate(
    std::string engineDescription)
    : engineDescription_{std::move(engineDescription)} {}

std::unique_ptr<RuntimeAgentDelegate>
FallbackRuntimeTargetDelegate::createAgentDelegate(
    FrontendChannel channel,
    SessionState& sessionState,
    std::unique_ptr<RuntimeAgentDelegate::ExportedState>
    /*previouslyExportedState*/,
    const ExecutionContextDescription& /*executionContextDescription*/,
    RuntimeExecutor /*runtimeExecutor*/) {
  return std::make_unique<jsinspector_modern::FallbackRuntimeAgentDelegate>(
      std::move(channel), sessionState, engineDescription_);
}

} // namespace facebook::react::jsinspector_modern
