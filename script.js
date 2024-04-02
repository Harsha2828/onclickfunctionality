function openPopup(event) {
  var index = Array.from(document.querySelectorAll('.grid-item2')).indexOf(event.target);
  var dynamicdat = document.querySelectorAll('.grid-item2')[index].innerText;
  var additionaldata= "admin_platform 3/19/2024 \n"+
  "Material Scrap:0.0\n"+
  "Sequencing Mode  :Linear\n"+
  "Roll up          :TRUE\n"+
  "Estimated time   :0.0\n"+
  "Value Added Ratio on \n Estimated Time :1.0\n"+
  "Is Time Proportional \n To Quantity : TRUE\n"+
  "Measured Time    :00\n";
  dynamicdat+="\n"+additionaldata;
  document.getElementById('dynamicdata').innerText = dynamicdat;
  document.getElementById('popup').style.display = 'block';
}
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
document.addEventListener('DOMContentLoaded', function() {
  var gridItems = document.querySelectorAll('.grid-item2');
  gridItems.forEach(function(item) {
    item.addEventListener('click', openPopup);
  });
});