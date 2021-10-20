/*!
  Copyright 2021 James Kimani.

 This source file is free software, available under the following license:
   MIT license - https://github.com/JamzyKimani/bootstrap-dynamic-fields/blob/main/LICENSE

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 DynamicFields 1.0.1
*/

$.fn.DynamicFields = function() {
  $(this).wrap('<div class="dynamic-fields-wrapper"></div>');
  //get target div id
  var id = $(this).attr('id');
  
  //get all form inputs
  var inputs = document.getElementById(id).querySelectorAll("input, select, checkbox, textarea");

  //get the last one
  var len = inputs.length;
  var targetEl = inputs[len - 1];
  var targetElParent = targetEl.parentNode;

  //create "+" button
  var addBtn = document.createElement("button");
  addBtn.className = "btn btn-success";
  addBtn.type = "button";
  addBtn.setAttribute('id', id+"__button__");
  addBtn.setAttribute('onclick',"DynamicFieldsAddRow(this.id)");
  addBtn.innerHTML = "+";

  //append it to last input element as a Bootstrap input group
  var wrapper = document.createElement("div");
  wrapper.className = "input-group";
  wrapper.appendChild(targetEl);
  wrapper.appendChild(addBtn);

  targetElParent.appendChild(wrapper);
}

function DynamicFieldsAddRow(btn_id) {

  var divID = btn_id.replace('__button__', '');
  var newID = divID.split('_')[0]+'_'+Math.floor(Math.random() * 10000).toString();
  var currentRow = $('#'+divID);
  var currentHTML = currentRow.html();

  var newRow = '<div class="row" id="'+newID+'">'+currentHTML+'</div>';
  newRow = newRow.replace(btn_id,newID+'__button__' );
  currentRow.parent().append(newRow);
 
  document.getElementById(btn_id).innerHTML = '-';
  document.getElementById(btn_id).setAttribute('onclick',"DynamicFieldsDeleteRow('"+divID+"')");
  document.getElementById(btn_id).className = 'btn btn-danger';
}

function DynamicFieldsDeleteRow(row_id) {
  var row = document.getElementById(row_id);
  row.parentNode.removeChild(row);

}

function htmlObjectToString(obj) {
  var wrapper = document.createElement("div");
  wrapper.appendChild(obj);
  
  return wrapper.innerHTML;
}