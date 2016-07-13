function initialize(){
  var Y_Point = 37.555239;  // 구글맵에서 앞의 숫자
      X_Point = 126.946444; // 구글맵에서 뒤의 숫자
      zoomLevel = 16;  // 지도 확대 레벨. 숫자 높을 수록 확대됨
      markerTitle = "기고자(Kigoja)"; // 현재 위치 마커에 마우스 올릴 시 나타나는 정보
      markerMaxWidth = 200; // 말풍선 최대 크기

  var contentString = '<div>' + '<h2>기고자(Kigoja)</h2>' + '<p>기고자는 독립 큐레이터 임다운이 운영하는 독립 예술 공간 이니셔티브로 <br/>' +
                      '2015년 4월 25일 마포구 대흥동의 한 주택가 골목에 처음 문을 열었습니다.<br/>' +
                      '젊은 작가들과 기획자들이 작품과 비평을 선보일 수 있는 공간을 마련하기 위한 자구책으로 시작되었습니다.</p>' +
                      '</div>';
  var myLatlng = new google.maps.LatLng(Y_Point, X_Point);
  var mapOptions = {
    zoom : zoomLevel,
    center : myLatlng,
    mapTypeId : google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(document.getElementById('map_view'), mapOptions);
  var marker = new google.maps.Marker(
    {
      position : myLatlng,
      map : map,
      title : markerTitle
    });

  var infowindow = new google.maps.InfoWindow(
    {
      content : contentString,
      maxWidth : markerMaxWidth
    });

  google.maps.event.addListener(marker, 'click', function(){
    infowindow.open(map, marker);
  });
}
