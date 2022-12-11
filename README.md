<img align="right" height="100" src="http://img.todepond.com/IMG/SpaceTode@0.25x.png">

# SpaceTode
SpaceTode is a spatial programming language.<br>
I use it to make new elements in the [SandPond engine](https://github.com/l2wilson94/SandPond).<br>
It is heavily inspired by [SPLAT](https://github.com/DaveAckley/SPLAT/).<br>

**For more info, check out the [SandPond Saga video series](https://youtube.com/c/TodePond).**

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
You can read the [SpaceTode Documentation](https://l2wilson94.gitbook.io/spacetode/) to learn more about the language.<br>
