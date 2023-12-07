function outer(){
	var inner = function() { console.log("inner"); }
	inner();
}

outer(); //inner

/* 함수 객체를 실행 가능한 객체로 번역(실행 컨텍스트, Execution Context)하는 평가 과정에서
내용들이 재구성(이 때 hoisting과 this binding도 이루어짐)된다.  
즉, 함수 객체 자체는 실행되는 것이 아니고 실행 가능한 객체로 번역이 되는 과정이 필요하다.*/