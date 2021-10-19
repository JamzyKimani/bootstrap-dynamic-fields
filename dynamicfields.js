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
  $(this).wrap('<div class="dynamic_fields_wrapper"></div>');
  var id = $(this).attr('id');
  var els = $('#'+id+' .form-group');
  var oldRowHTML = $(this).html();
  var len = els.length;
  var targetEl = els[len - 1];
  var wrapper = document.createElement("div");
  wrapper.appendChild(targetEl);
  var targetLabelText = wrapper.querySelector('label').innerHTML;
  var targetHTML = wrapper.innerHTML;

  addButtonHTML = targetHTML.replace('<label class="form-label">'+targetLabelText+'</label>', '');
  addButtonHTML = addButtonHTML.replace('<div class="form-group">', '<div class="form-group"><label class="form-label">'+targetLabelText+'</label><div class="input-group">');
  addButtonHTML = addButtonHTML.replace('</div>', '<button class="btn btn-success" type="button" id="'+id+'_button_"  onclick="DynamicFieldsAddRow(this.id);"> + </button></div></div>');
  
  var newRowHTML = oldRowHTML.replace(targetHTML, addButtonHTML );
  $(this).html(newRowHTML);
  var parent = $(this).parent();
  var parentHTML = parent.html();
  parent.html(parentHTML.replace(newRowHTML, '<div class="dynamic-fields-wrapper">'+newRowHTML+'</div>'));
  
}

function DynamicFieldsAddRow(btn_id) {
  var divID = btn_id.replace('_button_', '');
  var newID = divID.split('_')[0]+'_'+Math.floor(Math.random() * 10000).toString();
  var currentRow = $('#'+divID);
  var currentHTML = currentRow.html();
  var newRow = '<div class="row" id="'+newID+'">'+currentHTML+'</div>';
  
  newRow = newRow.replace(btn_id,newID+'_button_' );
  currentRow.parent().append(newRow);
 
  document.getElementById(btn_id).innerHTML = '-';
  document.getElementById(btn_id).setAttribute('onclick',"DynamicFieldsDeleteRow('"+divID+"')");
  document.getElementById(btn_id).className = 'btn btn-danger';
}

function DynamicFieldsDeleteRow(row_id) {
  var row = document.getElementById(row_id);
  row.parentNode.removeChild(row);
}
