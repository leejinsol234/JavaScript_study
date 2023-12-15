//윤년인지 확인하는 함수
function isLeapYear(year){
	if( (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0)) ){
		return true;
	}
	return false;
}

//