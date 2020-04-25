var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[7, 0, 0, 0]],[new Date(2020,02,25,9,15),[9, 0, 0, 0]],[new Date(2020,02,25,18,45),[14, 0, 0, 0]],[new Date(2020,02,26,10,15),[15, 0, 0, 1]],[new Date(2020,02,26,20,00),[20, 0, 0, 1]],[new Date(2020,02,27,9,15),[20, 0, 0, 1]],[new Date(2020,02,28,9,30),[30, 0, 0, 2]],[new Date(2020,02,28,17,45),[30, 0, 0, 2]],[new Date(2020,02,29,10,00),[30, 0, 0, 2]],[new Date(2020,02,29,19,30),[30, 0, 0, 2]],[new Date(2020,02,30,10,30),[33, 0, 0, 2]],[new Date(2020,02,30,21,30),[47, 0, 0, 3]],[new Date(2020,02,31,20,30),[47, 0, 0, 3]],[new Date('01 April 2020, 09:00 GMT+5:30'),[47, 0, 0, 3]],[new Date('01 April 2020, 19:30 GMT+5:30'),[66, 0, 0, 3]],[new Date('02 April 2020, 09:00 GMT+5:30'),[99, 0, 0, 6]],[new Date('02 April 2020, 18:00 GMT+5:30'),[99, 0, 0, 6]],[new Date('03 April 2020, 09:00 GMT+5:30'),[99, 0, 0, 6]],[new Date('03 April 2020, 18:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('04 April 2020, 09:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('04 April 2020, 18:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('05 April 2020, 09:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('05 April 2020, 18:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('06 April 2020, 09:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('06 April 2020, 18:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('07 April 2020, 09:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('07 April 2020, 18:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('08 April 2020, 08:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('08 April 2020, 17:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('09 April 2020, 08:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('09 April 2020, 17:00 GMT+5:30'),[259, 0, 0, 16]],[new Date('10 April 2020, 08:00 GMT+5:30'),[259, 0, 0, 16]],[new Date('10 April 2020, 17:00 GMT+5:30'),[259, 0, 0, 16]],[new Date('11 April 2020, 08:00 GMT+5:30'),[435, 0, 0, 33]],[new Date('11 April 2020, 17:00 GMT+5:30'),[443, 0, 0, 33]],[new Date('12 April 2020, 08:00 GMT+5:30'),[532, 0, 0, 36]],[new Date('12 April 2020, 17:00 GMT+5:30'),[564, 0, 0, 36]],[new Date('13 April 2020, 08:00 GMT+5:30'),[564, 0, 0, 36]],[new Date('13 April 2020, 17:00 GMT+5:30'),[604, 0, 44, 43]],[new Date('14 April 2020, 08:00 GMT+5:30'),[604, 0, 44, 43]],[new Date('14 April 2020, 17:00 GMT+5:30'),[730, 0, 51, 50]],[new Date('15 April 2020, 08:00 GMT+5:30'),[730, 0, 51, 50]],[new Date('15 April 2020, 17:00 GMT+5:30'),[987, 0, 64, 53]],[new Date('16 April 2020, 08:00 GMT+5:30'),[987, 0, 64, 53]],[new Date('16 April 2020, 17:00 GMT+5:30'),[1120, 0, 64, 53]],[new Date('17 April 2020, 08:00 GMT+5:30'),[1120, 0, 64, 53]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1308, 0, 65, 57]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1310, 0, 69, 69]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1355, 0, 69, 69]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1407, 0, 127, 70]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1407, 0, 127, 70]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1407, 0, 127, 70]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1485, 0, 127, 74]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1485, 0, 127, 74]],[new Date('21 April 2020, 17:00 GMT+5:30'),[1540, 0, 127, 76]],[new Date('22 April 2020, 08:00 GMT+5:30'),[1552, 0, 148, 76]],[new Date('22 April 2020, 17:00 GMT+5:30'),[1592, 0, 148, 80]],[new Date('23 April 2020, 08:00 GMT+5:30'),[1592, 0, 148, 80]],[new Date('23 April 2020, 17:00 GMT+5:30'),[1695, 0, 148, 81]],[new Date('24 April 2020, 08:00 GMT+5:30'),[1699, 0, 203, 83]],[new Date('24 April 2020, 17:00 GMT+5:30'),[1852, 0, 203, 83]],[new Date('25 April 2020, 08:00 GMT+5:30'),[1852, 0, 210, 92]]];