// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXVOgK-D2OPcio08DsSqOiYaoLWpDC32g",
  authDomain: "covid-web-b7cf1.firebaseapp.com",
  databaseURL: "https://covid-web-b7cf1-default-rtdb.firebaseio.com",
  projectId: "covid-web-b7cf1",
  storageBucket: "covid-web-b7cf1.appspot.com",
  messagingSenderId: "892788930902",
  appId: "1:892788930902:web:0ce7da9e00eb79261bbef7",
  measurementId: "G-JZP2JSD2ZB"
};
  firebase.initializeApp(firebaseConfig)
  ref=firebase.database().ref("input")
  document.getElementById("testForm").addEventListener("submit",submitform)
  function submitform(e){
    e.preventDefault()
    FN=document.getElementById("firstname").value
    LN=document.getElementById("lastname").value
    EN=document.getElementById("email").value
    PN=document.getElementById("profession").value
    MN=document.getElementById("mobile").value
    DN=document.getElementById("dateofbirth").value
    SN=document.getElementById("state").value
    TH=document.querySelector("input[type=radio]:checked").value
   SY=getsymptoms() 
   senttoserver(FN+LN,EN,PN,MN,DN,SN,TH,SY)
   readserver(SN)
   alert("Submitted succesfuly")
   }
function getsymptoms(){
  T=document.querySelectorAll("input[type=checkbox]:checked")
  V=[]
  T.forEach(element => {
    V.push(element.value)
  });
  return V
}
function senttoserver(un,em,pn,mn,bn,sn,th,sy){
  newref=ref.push ()
  newref.set({
    name:un,email:em,profession:pn,dob:bn,state:sn,travel:th,symptoms:sy
    })
}
function readserver(state){
  aref=firebase.database().ref(state)
  c=""
  aref.on("value",(data)=>{
    c=data.val()
  document.getElementById("cen").innerHTML="Corona Centeres near you ="+c
  })
}