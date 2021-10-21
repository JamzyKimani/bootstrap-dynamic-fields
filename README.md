# Welcome to Bootstrap Dynamic Fields

Simple, light-weight script for dynamically adding and removing Bootstrap form input fields. The script adds a handy + and - button to a Bootstrap .row div that dublicates and removes a row of form input fields as needed. 

<a href="https://jamzykimani.github.io/bootstrap-dynamic-fields/demo/demo.html" target="_blank">**CHECK DEMO**</a>  

![Dynamic form fields for Bootstrap](https://github.com/JamzyKimani/bootstrap-dynamic-fields/blob/main/demo/demo.gif)

**Disclaimer:** requires JQuery and Bootstrap 4^.
 
# Installation

 1. Download 'dynamicfields.js'
 2. Reference the file in below your JQuery and Bootstrap JS files
    ```javascript
    <script  src="path/to/dynamicfields.js"></script>
    ```
    
     
 3. Instantiate DynamicFields by referencing the element id of a bootstrap **.row** div containing the input fields that you want to replicate dynamically.
    ```javascript
    <script>$('#id_of_row)').DynamicFields();</script>
    ```

## Sample code

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
  
  <h1>Bootstrap Dynamic Fields</h1>
    <h3 class="text-muted">Demo 1</h2>

    <div class="panel panel-body py-3 px-5" >
      <div class="row" id="target-row">
        <div class="form-group col-md-3">
          <label>First Name</label>
          <input type="text" class="form-control" name="f_name[]" placeholder="First name">
        </div>

        <div class="form-group col-md-3">
          <label>Last Name</label>
          <input type="text" class="form-control" name="l_name[]" placeholder="Last name">
        </div>

        <div class="form-group col-md-3">
          <label>Gender</label>
          <select name="gender[]" class="form-control">
            <option selected>Choose...</option>
            <option value="m">Male</option>
            <option value="f">Female</option>
          </select>
        </div>

        <div class="form-group col-md-3">
          <label>Email</label>
          <input type="email" name="email[]" class="form-control" placeholder="email">
        </div>
      </div>
    </div>

  
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

    <script src="../dynamicfields.js" ></script>
    <script>
      $('#target-row').DynamicFields();

    </script>

  </body>
</html>
```



