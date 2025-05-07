// Changing Attributes in JS Apple vs Android

// Android
document.getElementById("android").addEventListener("click", showAndroid);

function showAndroid() {
  document.getElementById("logo").src = "Images/Android-Logo.jpg";
  document.getElementById("explore").innerHTML = "Android Home";
  document.getElementById("link").href = "https://www.android.com/";
  document.getElementById("explore").style.background = "#a4c93b";
  document.getElementById("pagebg").style.background = "#a4c93b";
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
  document.getElementById("font").style.fontFamily = "'Roboto', sans-serif";
}

// Apple
document.getElementById("apple").addEventListener("click", showApple);

function showApple() {
  document.getElementById("logo").src = "Images/Apple-Logo.jpg";
  document.getElementById("explore").innerHTML = "Apple Home";
  document.getElementById("link").href = "https://www.apple.com/";
  document.getElementById("explore").style.background = "#b6bcca";
  document.getElementById("pagebg").style.background = "#b6bcca";
  document.getElementById("apple").classList.add("active");
  document.getElementById("android").classList.remove("active");
  document.getElementById("font").style.fontFamily = "'Brygada 1918', serif";
}
