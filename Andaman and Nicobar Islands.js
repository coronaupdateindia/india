var rawData=[[new Date(2020,02,26,20,00),[1, 0, 0, 0]],[new Date(2020,02,27,9,15),[1, 0, 0, 0]],[new Date(2020,02,28,9,30),[2, 0, 0, 0]],[new Date(2020,02,28,17,45),[6, 0, 0, 0]],[new Date(2020,02,29,10,00),[9, 0, 0, 0]],[new Date(2020,02,29,19,30),[9, 0, 0, 0]],[new Date(2020,02,30,10,30),[9, 0, 0, 0]],[new Date(2020,02,30,21,30),[9, 0, 0, 0]],[new Date(2020,02,31,20,30),[10, 0, 0, 0]],[new Date('01 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('01 April 2020, 19:30 GMT+5:30'),[10, 0, 1, 0]],[new Date('02 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('02 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('03 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('03 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('04 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('04 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('05 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('05 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('06 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('06 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('07 April 2020, 09:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('07 April 2020, 18:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('08 April 2020, 08:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('08 April 2020, 17:00 GMT+5:30'),[10, 0, 0, 0]],[new Date('09 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('09 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('10 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('10 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('11 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('11 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 0]],[new Date('12 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('12 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('13 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('13 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('14 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('16 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('16 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('17 April 2020, 08:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('17 April 2020, 17:00 GMT+5:30'),[11, 0, 10, 0]],[new Date('18 April 2020, 08:00 GMT+5:30'),[12, 0, 11, 0]],[new Date('18 April 2020, 17:00 GMT+5:30'),[12, 0, 11, 0]],[new Date('19 April 2020, 08:00 GMT+5:30'),[14, 0, 11, 0]],[new Date('19 April 2020, 17:00 GMT+5:30'),[14, 0, 11, 0]],[new Date('20 April 2020, 08:00 GMT+5:30'),[15, 0, 11, 0]],[new Date('20 April 2020, 17:00 GMT+5:30'),[15, 0, 11, 0]],[new Date('21 April 2020, 08:00 GMT+5:30'),[16, 0, 11, 0]],[new Date('21 April 2020, 17:00 GMT+5:30'),[16, 0, 11, 0]],[new Date('22 April 2020, 08:00 GMT+5:30'),[16, 0, 11, 0]],[new Date('22 April 2020, 17:00 GMT+5:30'),[17, 0, 11, 0]],[new Date('23 April 2020, 08:00 GMT+5:30'),[18, 0, 11, 0]],[new Date('23 April 2020, 17:00 GMT+5:30'),[18, 0, 11, 0]],[new Date('24 April 2020, 08:00 GMT+5:30'),[22, 0, 11, 0]],[new Date('24 April 2020, 17:00 GMT+5:30'),[22, 0, 11, 0]],[new Date('25 April 2020, 08:00 GMT+5:30'),[27, 0, 11, 0]],[new Date('25 April 2020, 17:00 GMT+5:30'),[27, 0, 11, 0]],[new Date('26 April 2020, 08:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('26 April 2020, 17:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('27 April 2020, 08:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('27 April 2020, 17:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('28 April 2020, 08:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('28 April 2020, 17:00 GMT+5:30'),[33, 0, 11, 0]],[new Date('29 April 2020, 08:00 GMT+5:30'),[33, 0, 15, 0]],[new Date('29 April 2020, 17:00 GMT+5:30'),[33, 0, 15, 0]],[new Date('30 April 2020, 08:00 GMT+5:30'),[33, 0, 15, 0]],[new Date('30 April 2020, 17:00 GMT+5:30'),[33, 0, 15, 0]],[new Date('01 May 2020, 08:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('01 May 2020, 17:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('02 May 2020, 08:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('02 May 2020, 17:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('03 May 2020, 08:00 GMT+5:30'),[33, 0, 16, 0]],[new Date('03 May 2020, 17:00 GMT+5:30'),[33, 0, 17, 0]],[new Date('04 May 2020, 08:00 GMT+5:30'),[33, 0, 32, 0]],[new Date('04 May 2020, 17:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('05 May 2020, 08:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('05 May 2020, 17:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('06 May 2020, 08:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('07 May 2020, 08:00  GMT+5:30'),[33, 0, 32, 0]],[new Date('08 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('09 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]],[new Date('10 May 2020, 08:00  GMT+5:30'),[33, 0, 33, 0]]];