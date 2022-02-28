  $('#table').bootstrapTable({
       
   
    data: [{
        id:1,
        name:"ahmed",
        phone: "01012345678900"
    },
    {
        id:2,
        name:"mohamed",
        phone: "0101234567893"
    },
    {
        id:3,
        name:"may",
        phone: "010134348900"
    },
    {
        id:4,
        name:"ehab",
        phone: "0101265678900"
    },
    
    {
        id:5,
        name:"da",
        phone: "01312345678900"
    },   {
        id:6,
        name:"ehab",
        phone: "0101265678900"
    },
    {
        id:7,
        name:"yousef",
        phone: "0101265678900"
    },
    {
        id:8,
        name:"tawfik",
        phone: "0101265678900"
    },
    {
        id:9,
        name:"mohsn",
        phone: "0101265678900"
    },
    {
        id:10,
        name:"rezk",
        phone: "0101265678900"
    },
    {
        id:11,
        name:"essam",
        phone: "0101265678900"
    },
    {
        id:12,
        name:"ramy",
        phone: "0101265678900"
    },
    {
        id:13,
        name:"dedo",
        phone: "0101265678900"
    },

    {
        id:14,
        name:"enas",
        phone: "0101265678900"
    },
    {
        id:15,
        name:"hema",
        phone: "0101265678900"
    },

    {
        id:16,
        name:"koko",
        phone: "0101265678900"
    },
    {
        id:17,
        name:"lido",
        phone: "0101265678900"
    },
    {
        id:18,
        name:"mark",
        phone: "0101265678900"
    },
    {
        id:19,
        name:"joe",
        phone: "0101265678900"
    },
    {
        id:20,
        name:"semary",
        phone: "01012252442900"
    },
    {
        id:21,
        name:"zaid",
        phone: "010124423900"
    },
    {
        id:22,
        name:"zyad",
        phone: "0101265122100"
    },
    {
        id:23,
        name:"pork",
        phone: "010123333330"
    },
    {
        id:24,
        name:"lunch",
        phone: "010122222200"
    },
    {
        id:25,
        name:"sa",
        phone: "0103434900"
    },
    {
        id:26,
        name:"seham",
        phone: "010126567900"
    },
    {
        id:27,
        name:"soaad",
        phone: "010126435378900"
    },
    {
        id:28,
        name:"sona",
        phone: "010538900"
    },
    {
        id:29,
        name:"nosa",
        phone: "010126438900"
    },
    {
        id:30,
        name:"queen",
        phone: "01012643430"
    },
]
  })


 
  $('#table').on('click-cell.bs.table', function (field, value, row, $element) {
    let userInfo = {
        id: $element.id,
        name: $element.name,
        phone: $element.phone
    }
    let name = document.getElementsByClassName("name-modal")[0];
    let phone = document.getElementsByClassName("phone-modal")[0];
    name.innerHTML = userInfo.name; 
    phone.innerHTML = userInfo.phone; 
})



  function TableActions (value, row, index) {
    return [
        '<div class="d-flex justify-content-center" ><button id="'+row.id+'" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" class="btn  btn-table">Details</button></div>'
    ].join('');
}