let get_make_model=document.getElementById("make_model_sec1");
let get_car_image=document.getElementById("car_image_sec1");
let get_location=document.getElementById("location_sec1");
let get_from=document.getElementById("from_book");
let get_to=document.getElementById("to_book");
let get_car_amount=document.getElementById("car_amount");
let get_p2=document.getElementById("p2");
let get_p3=document.getElementById("p3");
let get_total_amount=document.getElementById("total_amount");

let car=JSON.parse(localStorage.getItem("Each_Car"));
console.log(car);
get_make_model.textContent=car.make+" "+car.model;
get_car_image.setAttribute("src",car.image);
get_location.textContent="Location: "+localStorage.getItem("city");
get_from.textContent=new Date(localStorage.getItem("getFrom"));
get_to.textContent=new Date(localStorage.getItem("getTo"));
millisec_diff_book=localStorage.getItem("millisec_diff");
get_car_amount.textContent=Math.trunc(((millisec_diff_book)/(60*1000))*car.price);
get_total_amount.textContent=Number(get_car_amount.textContent)+Number(p2.textContent)+Number(p3.textContent);