# SpaceTode
SpaceTode is a spatial programming language.<br>
It can make it easier to program how atoms behave.<br>
SpaceTode is used by the [SandPond engine](https://github.com/l2wilson94/SandPond).
The language is heavily inspired by [SPLAT](https://github.com/DaveAckley/SPLAT/).<br>

## What does it look like?
You draw spatial rules for atoms to follow, like this one:
```
element Sand {
    @ => _
    _    @
}
```
In this example, the `@` represents the sand atom.<br>
In this example, the `_` represents an empty space.<br>
So... the rule makes the sand atom fall down if there's an empty space below it.<br>

## Try it out
The easiest way to try out SpaceTode is by using the [SandPond engine](https://github.com/l2wilson94/SandPond).<br>

Advanced: To implement SpaceTode in your own project, add these script tags.
```html
<script src="https://habitat.todepond.cool"></script>
<script src="https://habitat.todepond.cool/Build/EatLegacy.js"></script>
<script src="https://spacetode.todepond.cool"></script>
```
It doesn't work any other way at the moment (eg: `import`) but I hope to change that in the future.
