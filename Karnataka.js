var rawData=[[new Date(2020,02,15,12,0),[ 6, 0,0,1]],[new Date(2020,02,15,17,0),[ 6, 0,0,1]],[new Date(2020,02,15,23,30),[ 6, 0,0,1]],[new Date(2020,02,16,16,0),[ 6, 0,0,1]],[new Date(2020,02,17,9,15),[ 8, 0,0,1]],[new Date(2020,02,17,17,15),[11, 0,0,1]],[new Date(2020,02,24,20,15),[37, 0, 3, 1]],[new Date(2020,02,25,9,15),[41, 0, 3, 1]],[new Date(2020,02,25,18,45),[41, 0, 3, 1]],[new Date(2020,02,26,10,15),[41, 0, 3, 1]],[new Date(2020,02,26,20,00),[55, 0, 3, 2]],[new Date(2020,02,27,9,15),[55, 0, 3, 2]],[new Date(2020,02,28,9,30),[55, 0, 3, 2]],[new Date(2020,02,28,17,45),[55, 0, 3, 2]],[new Date(2020,02,29,10,00),[76, 0, 5, 3]],[new Date(2020,02,29,19,30),[76, 0, 5, 3]],[new Date(2020,02,30,10,30),[80, 0, 5, 3]],[new Date(2020,02,30,21,30),[83, 0, 5, 3]],[new Date(2020,02,31,20,30),[83, 0, 5, 3]],[new Date('01 April 2020, 09:00 GMT+5:30'),[101, 0, 8, 3]],[new Date('01 April 2020, 19:30 GMT+5:30'),[101, 0, 8, 3]],[new Date('02 April 2020, 09:00 GMT+5:30'),[110, 0, 9, 3]],[new Date('02 April 2020, 18:00 GMT+5:30'),[110, 0, 9, 3]],[new Date('03 April 2020, 09:00 GMT+5:30'),[124, 0, 10, 3]],[new Date('03 April 2020, 18:00 GMT+5:30'),[124, 0, 10, 3]],[new Date('04 April 2020, 09:00 GMT+5:30'),[128, 0, 12, 3]],[new Date('04 April 2020, 18:00 GMT+5:30'),[128, 0, 12, 3]],[new Date('05 April 2020, 09:00 GMT+5:30'),[144, 0, 12, 4]],[new Date('05 April 2020, 18:00 GMT+5:30'),[144, 0, 12, 4]],[new Date('06 April 2020, 09:00 GMT+5:30'),[151, 0, 12, 4]],[new Date('06 April 2020, 18:00 GMT+5:30'),[151, 0, 12, 4]],[new Date('07 April 2020, 09:00 GMT+5:30'),[151, 0, 12, 4]],[new Date('07 April 2020, 18:00 GMT+5:30'),[175, 0, 25, 4]],[new Date('08 April 2020, 08:00 GMT+5:30'),[175, 0, 25, 4]],[new Date('08 April 2020, 17:00 GMT+5:30'),[175, 0, 25, 4]],[new Date('09 April 2020, 08:00 GMT+5:30'),[181, 0, 28, 5]],[new Date('09 April 2020, 17:00 GMT+5:30'),[181, 0, 28, 5]],[new Date('10 April 2020, 08:00 GMT+5:30'),[181, 0, 28, 5]],[new Date('10 April 2020, 17:00 GMT+5:30'),[197, 0, 30, 6]],[new Date('11 April 2020, 08:00 GMT+5:30'),[207, 0, 31, 6]],[new Date('11 April 2020, 17:00 GMT+5:30'),[214, 0, 37, 6]],[new Date('12 April 2020, 08:00 GMT+5:30'),[214, 0, 37, 6]],[new Date('12 April 2020, 17:00 GMT+5:30'),[226, 0, 37, 6]],[new Date('13 April 2020, 08:00 GMT+5:30'),[232, 0, 57, 6]],[new Date('13 April 2020, 17:00 GMT+5:30'),[247, 0, 59, 6]],[new Date('14 April 2020, 08:00 GMT+5:30'),[247, 0, 59, 6]],[new Date('14 April 2020, 17:00 GMT+5:30'),[258, 0, 65, 9]],[new Date('15 April 2020, 08:00 GMT+5:30'),[260, 0, 71, 10]],[new Date('15 April 2020, 17:00 GMT+5:30'),[277, 0, 75, 11]],[new Date('16 April 2020, 08:00 GMT+5:30'),[279, 0, 80, 12]],[new Date('16 April 2020, 17:00 GMT+5:30'),[315, 0, 82, 13]],[new Date('17 April 2020, 08:00 GMT+5:30'),[315, 0, 82, 13]],[new Date('17 April 2020, 17:00 GMT+5:30'),[353, 0, 82, 13]],[new Date('18 April 2020, 08:00 GMT+5:30'),[359, 0, 89, 13]],[new Date('18 April 2020, 17:00 GMT+5:30'),[371, 0, 92, 13]],[new Date('19 April 2020, 08:00 GMT+5:30'),[384, 0, 104, 14]],[new Date('19 April 2020, 17:00 GMT+5:30'),[384, 0, 104, 14]],[new Date('20 April 2020, 08:00 GMT+5:30'),[390, 0, 111, 16]],[new Date('20 April 2020, 17:00 GMT+5:30'),[395, 0, 111, 16]],[new Date('21 April 2020, 08:00 GMT+5:30'),[408, 0, 112, 16]],[new Date('21 April 2020, 17:00 GMT+5:30'),[415, 0, 114, 17]],[new Date('22 April 2020, 08:00 GMT+5:30'),[418, 0, 129, 17]],[new Date('22 April 2020, 17:00 GMT+5:30'),[425, 0, 129, 17]],[new Date('23 April 2020, 08:00 GMT+5:30'),[427, 0, 131, 17]],[new Date('23 April 2020, 17:00 GMT+5:30'),[443, 0, 141, 17]],[new Date('24 April 2020, 08:00 GMT+5:30'),[445, 0, 145, 17]],[new Date('24 April 2020, 17:00 GMT+5:30'),[463, 0, 150, 18]],[new Date('25 April 2020, 08:00 GMT+5:30'),[474, 0, 152, 18]],[new Date('25 April 2020, 17:00 GMT+5:30'),[489, 0, 153, 18]],[new Date('26 April 2020, 08:00 GMT+5:30'),[500, 0, 158, 18]],[new Date('26 April 2020, 17:00 GMT+5:30'),[501, 0, 177, 18]],[new Date('27 April 2020, 08:00 GMT+5:30'),[503, 0, 182, 19]]];