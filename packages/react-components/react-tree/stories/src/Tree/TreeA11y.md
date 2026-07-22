## Accessibility

Here are some accessibility edge cases scenarios we identified and users should keep in mind while using the `Tree` components.

NVDA

1. [Single select tree - narration of grouping #15290](https://github.com/nvaccess/nvda/issues/15290)
2. [Single select tree - narration aria-selected makes verbosity with redundant "selected" #15289](https://github.com/nvaccess/nvda/issues/15289)

VoiceOver/Chromium

1. [Issue 1273540: Tree as table in Mac > VoiceOver narrates " 0 items enclosed " when user navigates to expaded treeitem](https://bugs.chromium.org/p/chromium/issues/detail?id=1273540)
2. [Issue 1273544: Tree as table in Mac > VoiceOver doesn't narrate aria-labelledby element on treeitem](https://bugs.chromium.org/p/chromium/issues/detail?id=1273544)

VoiceOver

1. VoiceOver does not narrate the tree level.
2. VoiceOver does not list the tree or table in the rotor.
3. On iOS, VoiceOver does not narrate the checked or unchecked state for a selectable tree with checkboxes.

JAWS

1. [Treeview - JAWS doesn't narrate position for each tree item #338](https://github.com/FreedomScientific/standards-support/issues/338)
2. [JAWS doesn't narrated "toolbar" keyword in navigable treeitem with actions buttons #747
   ](https://github.com/FreedomScientific/standards-support/issues/747)

Narrator

1. A single-select tree can announce a redundant "selected" state.
2. A selectable tree with checkboxes may not announce the checked state.
3. A selectable tree with checkboxes may not toggle with Space in scan mode.
