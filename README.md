```
              (`  ).                     _
             (     ).                 .:(`  )`.
)           _(       '`.             :(   .    )
        .=(`(      .   )         .--  `.  (    ) )
       ((    (..__.:'-'       .+(   )   ` _`  ) )
`.     `(       ) )  t o k e  (   .  )     (   )  ._
  )      ` __.:'   )         (   (   ))     `-'.-(`  )
)  )  ( )       --'           `- __.'         :(      ))
.-'  (_.'          .')                    `(    )  ))
                  (_  )                     ` __.:'

```


# ☁ toke ☁


A (_very_ experimental) DSL for phrase grammar, more usefully referred to as "mad libs for twitter bots".

```
import toke from "toke";
console.log(toke.mk("{NP} {VP}");
// "The first toad was cursed by a dog"
```

Each token is a [POS tag](https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html) enclosed in `{delimiters}`.
