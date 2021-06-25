/**
 * @license Copyright 2021 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

/**
 * @fileoverview Ensures input buttons have discernible text.
 * See base class in axe-audit.js for audit() implementation.
 *
 * See PR where input-button-name was split out from button-name:
 * @url https://github.com/dequelabs/axe-core/pull/1615
 */

const AxeAudit = require('./axe-audit.js');
const i18n = require('../../lib/i18n/i18n.js');

const UIStrings = {
  /** Title of an accesibility audit that evaluates if all input button elements have names accessible to screen readers. This title is descriptive of the successful state and is shown to users when no user action is required. */
  title: 'Input buttons have an accessible name',
  /** Title of an accesibility audit that evaluates if all input button elements have names accessible to screen readers. This title is descriptive of the failing state and is shown to users when there is a failure that needs to be addressed. */
  failureTitle: 'Input buttons do not have an accessible name',
  /** Description of a Lighthouse audit that tells the user *why* they should try to pass. This is displayed after a user expands the section to see more. No character length limits. 'Learn More' becomes link text to additional documentation. */
  description: 'When an input button doesn\'t have an accessible name, screen readers announce ' +
      'it as "button", making it unusable for users who rely on screen readers. ' +
      '[Learn more](https://dequeuniversity.com/rules/axe/4.1/input-button-name?application=lighthouse).',
};


const str_ = i18n.createMessageInstanceIdFn(__filename, UIStrings);

class InputButtonName extends AxeAudit {
  /**
   * @return {LH.Audit.Meta}
   */
  static get meta() {
    return {
      id: 'input-button-name',
      title: str_(UIStrings.title),
      failureTitle: str_(UIStrings.failureTitle),
      description: str_(UIStrings.description),
      requiredArtifacts: ['Accessibility'],
    };
  }
}

module.exports = InputButtonName;
module.exports.UIStrings = UIStrings;
