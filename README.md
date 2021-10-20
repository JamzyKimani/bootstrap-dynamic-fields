# Welcome to Bootstrap Dynamic Fields

Simple, light-weight script for dynamically adding and removing Bootstrap form input fields. The script adds a handy + and - button to a Bootstrap .row div that dublicates and removes a row of form input fields as needed. 

![Dynamic form fields for Bootstrap](https://github.com/JamzyKimani/bootstrap-dynamic-fields/blob/main/demo/demo.gif)

**Disclaimer:** requires JQuery and Bootstrap 4^.
 
# Installation

 1. Download 'dynamicfields.js'
 2. Reference the file in below your JQuery and Bootstrap JS files
     > <script  src="path/to/dynamicfields.js"></script>
     
 3. Instantiate DynamicFields by referencing the element id of a bootstrap **.row** div containing the input fields that you want to replicate dynamically.
    > <script>$('#id_of_row)').DynamicFields();</script>

