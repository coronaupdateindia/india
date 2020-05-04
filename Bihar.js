var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[3, 0, 0, 1]],[new Date(2020,02,25,9,15),[3, 0, 0, 1]],[new Date(2020,02,25,18,45),[4, 0, 0, 1]],[new Date(2020,02,26,10,15),[3, 0, 0, 1]],[new Date(2020,02,26,20,00),[6, 0, 0, 1]],[new Date(2020,02,27,9,15),[6, 0, 0, 1]],[new Date(2020,02,28,9,30),[9, 0, 0, 1]],[new Date(2020,02,28,17,45),[9, 0, 0, 1]],[new Date(2020,02,29,10,00),[9, 0, 0, 1]],[new Date(2020,02,29,19,30),[11, 0, 0, 1]],[new Date(2020,02,30,10,30),[11, 0, 0, 1]],[new Date(2020,02,30,21,30),[15, 0, 0, 1]],[new Date(2020,02,31,20,30),[15, 0, 0, 1]],[new Date('01 April 2020, 09:00 GMT+5:30'),[23, 0, 0, 1]],[new Date('01 April 2020, 19:30 GMT+5:30'),[23, 0, 0, 1]],[new Date('02 April 2020, 09:00 GMT+5:30'),[23, 0, 0, 1]],[new Date('02 April 2020, 18:00 GMT+5:30'),[24, 0, 0, 1]],[new Date('03 April 2020, 09:00 GMT+5:30'),[24, 0, 0, 1]],[new Date('03 April 2020, 18:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('04 April 2020, 09:00 GMT+5:30'),[29, 0, 0, 1]],[new Date('04 April 2020, 18:00 GMT+5:30'),[30, 0, 0, 1]],[new Date('05 April 2020, 09:00 GMT+5:30'),[30, 0, 0, 1]],[new Date('05 April 2020, 18:00 GMT+5:30'),[30, 0, 0, 1]],[new Date('06 April 2020, 09:00 GMT+5:30'),[30, 0, 0, 1]],[new Date('06 April 2020, 18:00 GMT+5:30'),[32, 0, 0, 1]],[new Date('07 April 2020, 09:00 GMT+5:30'),[32, 0, 0, 1]],[new Date('07 April 2020, 18:00 GMT+5:30'),[32, 0, 0, 1]],[new Date('08 April 2020, 08:00 GMT+5:30'),[38, 0, 0, 1]],[new Date('08 April 2020, 17:00 GMT+5:30'),[38, 0, 0, 1]],[new Date('09 April 2020, 08:00 GMT+5:30'),[38, 0, 0, 1]],[new Date('09 April 2020, 17:00 GMT+5:30'),[39, 0, 0, 1]],[new Date('10 April 2020, 08:00 GMT+5:30'),[39, 0, 0, 1]],[new Date('10 April 2020, 17:00 GMT+5:30'),[60, 0, 0, 1]],[new Date('11 April 2020, 08:00 GMT+5:30'),[60, 0, 0, 1]],[new Date('11 April 2020, 17:00 GMT+5:30'),[60, 0, 0, 1]],[new Date('12 April 2020, 08:00 GMT+5:30'),[63, 0, 0, 1]],[new Date('12 April 2020, 17:00 GMT+5:30'),[64, 0, 19, 1]],[new Date('13 April 2020, 08:00 GMT+5:30'),[64, 0, 19, 1]],[new Date('13 April 2020, 17:00 GMT+5:30'),[64, 0, 26, 1]],[new Date('14 April 2020, 08:00 GMT+5:30'),[65, 0, 26, 1]],[new Date('14 April 2020, 17:00 GMT+5:30'),[66, 0, 26, 1]],[new Date('15 April 2020, 08:00 GMT+5:30'),[66, 0, 29, 1]],[new Date('15 April 2020, 17:00 GMT+5:30'),[70, 0, 29, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[70, 0, 29, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[74, 0, 29, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[80, 0, 37, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[83, 0, 37, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[83, 0, 37, 2]],[new Date('18 April 2020, 17:00 GMT+5:30'),[85, 0, 37, 2]],[new Date('19 April 2020, 08:00 GMT+5:30'),[86, 0, 37, 2]],[new Date('19 April 2020, 17:00 GMT+5:30'),[86, 0, 37, 2]],[new Date('20 April 2020, 08:00 GMT+5:30'),[93, 0, 42, 2]],[new Date('20 April 2020, 17:00 GMT+5:30'),[96, 0, 42, 2]],[new Date('21 April 2020, 08:00 GMT+5:30'),[113, 0, 42, 2]],[new Date('21 April 2020, 17:00 GMT+5:30'),[114, 0, 42, 2]],[new Date('22 April 2020, 08:00 GMT+5:30'),[126, 0, 42, 2]],[new Date('22 April 2020, 17:00 GMT+5:30'),[126, 0, 46, 2]],[new Date('23 April 2020, 08:00 GMT+5:30'),[143, 0, 46, 2]],[new Date('23 April 2020, 17:00 GMT+5:30'),[148, 0, 46, 2]],[new Date('24 April 2020, 08:00 GMT+5:30'),[153, 0, 46, 2]],[new Date('24 April 2020, 17:00 GMT+5:30'),[176, 0, 46, 2]],[new Date('25 April 2020, 08:00 GMT+5:30'),[223, 0, 46, 2]],[new Date('25 April 2020, 17:00 GMT+5:30'),[228, 0, 46, 2]],[new Date('26 April 2020, 08:00 GMT+5:30'),[243, 0, 46, 2]],[new Date('26 April 2020, 17:00 GMT+5:30'),[251, 0, 46, 2]],[new Date('27 April 2020, 08:00 GMT+5:30'),[274, 0, 56, 2]],[new Date('27 April 2020, 17:00 GMT+5:30'),[277, 0, 56, 2]],[new Date('28 April 2020, 08:00 GMT+5:30'),[345, 0, 57, 2]],[new Date('28 April 2020, 17:00 GMT+5:30'),[346, 0, 57, 2]],[new Date('29 April 2020, 08:00 GMT+5:30'),[366, 0, 64, 2]],[new Date('29 April 2020, 17:00 GMT+5:30'),[383, 0, 64, 2]],[new Date('30 April 2020, 08:00 GMT+5:30'),[392, 0, 65, 2]],[new Date('30 April 2020, 17:00 GMT+5:30'),[403, 0, 65, 2]],[new Date('01 May 2020, 08:00 GMT+5:30'),[418, 0, 82, 2]],[new Date('01 May 2020, 17:00 GMT+5:30'),[426, 0, 82, 2]],[new Date('02 May 2020, 08:00 GMT+5:30'),[471, 0, 98, 3]],[new Date('02 May 2020, 17:00 GMT+5:30'),[471, 0, 98, 3]],[new Date('03 May 2020, 08:00 GMT+5:30'),[481, 0, 107, 4]],[new Date('03 May 2020, 17:00 GMT+5:30'),[482, 0, 117, 4]],[new Date('04 May 2020, 08:00 GMT+5:30'),[503, 0, 125, 4]]];