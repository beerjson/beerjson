# FermentableBase

Defined in [fermentable.json](../json/fermentable.json)

FermentableBase provides unique properties to identify individual records of fermentable ingredients

**FermentableBase** is an object with these properties:

| name        | required           | type                                                                                                | description |
| ----------- | ------------------ | --------------------------------------------------------------------------------------------------- | ----------- |
| name        | :white_check_mark: | string                                                                                              |
| type        | :white_check_mark: | "dry extract"<br/>"extract"<br/>"grain"<br/>"sugar"<br/>"fruit"<br/>"juice"<br/>"honey"<br/>"other" |             |
| origin      |                    | string                                                                                              |             |
| supplier    |                    | string                                                                                              |             |
| grain_group |                    | "base"<br/>"caramel"<br/>"flaked"<br/>"roasted"<br/>"specialty"<br/>"smoked"<br/>"adjunct"          |             |
