var i = 0;

var txt1 =

  "हाय Babita...! << अब मैं तुमसे कुछ खास नहीं कहना चाहता। <<< तो, कृपया सब कुछ ध्यान से पढ़ें...! > जब मैंने तुम्हें पहली बार देखा < तुम कुछ खास लगती हो मेरे लिए। << जैसे-जैसे दिन बीतते हैं < तुम मेरे करीब आते जाते हो....! << मुझे इसका कारण नहीं पता कि तुम्हारे विचार हमेशा मेरे दिमाग में क्यों गूंजते रहते हैं...! > तुम्हारे बारे में हर चीज मेरे लिए हमेशा दिलचस्प होती है ...! << मैं थोड़ा घबराया हुआ हूं क्योंकि मैंने ये शब्द किसी से नहीं कहे हैं और भविष्य में भी किसी से नहीं कहूंगा...! > मैं इस दुनिया में किसी भी चीज़ से ज्यादा अपने माता-पिता से प्यार करता हूं... .! << अब आप एकमात्र व्यक्ति हैं जिसे मैं अपने माता-पिता के बराबर प्यार करता हूं...! >Sab padh liya thik hai upper CLICK HERE likha hoga use click karo|<मुझे अपना प्यार साबित करने का एक मौका दें... ! ";
var speed = 150;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
