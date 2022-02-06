let newRow = `  <tr>
            <td>
              <button class="btn btn-danger deletebtn">Delete</button>
              <button class="btn btn-primary clonebtn">clone</button>
            </td>
            <td><input type="text" /></td>
            <td><input type="text" /></td>
            <td>
              <div>
                <input
                  class="form-check-input ms-2"
                  type="radio"
                  name="radio"
                  id="New"
                  value="New"
                /><label for="New">New</label>

                <!-------->
                <input
                  class="form-check-input ms-2"
                  type="radio"
                  name="radio"
                  id="progress"
                  value="inprogress"
                /><label for="progress">In progress</label>
                <!-- ---------- -->

                <input
                  class="form-check-input ms-2"
                  type="radio"
                  name="radio"
                  id="Confrimed"
                  value="confrimed"
                /><label for="Confrimed">Confrimed</label>
              </div>
            </td>
          </tr> `;

$(document).ready(function () {
  // $(".addnewbtn").click(function () {
  //   $(".tbody").prepend(newRow);
  // });
  // $(".deletebtn").click(function () {
  //   $(this).closest("tr").remove();
  // });

  addnew();
  deletetr();
  clonetr();
  rownumber();
});

function addnew() {
  $(".addnewbtn").click(function () {
    $(".tbody").prepend(newRow);
    deletetr();
    clonetr();
    rownumber();
  });
}

function deletetr() {
  $(".deletebtn").click(function () {
    console.log(this);
    $(this).closest("tr").remove();
    rownumber();
  });
}

function clonetr() {
  $(".clonebtn").click(function () {
    var clonedRow = $(this).closest("tr").clone(true);
    $(this).closest("tr").after(clonedRow);
    rownumber();
  });
}

function rownumber() {
  var rownum = $(".tbody tr").length;
  $(".allrow").text(rownum);
}
