var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date('14 April 2020, 17:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('15 April 2020, 08:00 GMT+5:30'),[1, 0, 0, 0]],[new Date('15 April 2020, 17:00 GMT+5:30'),[7, 0, 0, 1]],[new Date('16 April 2020, 08:00 GMT+5:30'),[7, 0, 0, 1]],[new Date('16 April 2020, 17:00 GMT+5:30'),[7, 0, 0, 1]],[new Date('17 April 2020, 08:00 GMT+5:30'),[7, 0, 0, 1]],[new Date('17 April 2020, 17:00 GMT+5:30'),[9, 0, 0, 1]],[new Date('18 April 2020, 08:00 GMT+5:30'),[9, 0, 0, 1]],[new Date('18 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('19 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('19 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('20 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('20 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('21 April 2020, 08:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('21 April 2020, 17:00 GMT+5:30'),[11, 0, 0, 1]],[new Date('22 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('22 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('23 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('23 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('24 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('24 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('25 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('25 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('26 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('26 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('27 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('27 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('28 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('28 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('29 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('29 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('30 April 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('30 April 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('01 May 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('01 May 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('02 May 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('02 May 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('03 May 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('03 May 2020, 17:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('04 May 2020, 08:00 GMT+5:30'),[12, 0, 0, 1]],[new Date('04 May 2020, 17:00  GMT+5:30'),[12, 0, 0, 1]],[new Date('05 May 2020, 08:00  GMT+5:30'),[12, 0, 0, 1]],[new Date('05 May 2020, 17:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('06 May 2020, 08:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('07 May 2020, 08:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('08 May 2020, 08:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('09 May 2020, 08:00  GMT+5:30'),[12, 0, 10, 1]],[new Date('10 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('11 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('12 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('13 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('14 May 2020, 08:00  GMT+5:30'),[13, 0, 10, 1]],[new Date('15 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('16 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('17 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('18 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('19 May 2020, 08:00  GMT+5:30'),[13, 0, 11, 1]],[new Date('20 May 2020, 08:00  GMT+5:30'),[13, 0, 12, 1]],[new Date('21 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('22 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('23 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('24 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('25 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('26 May 2020, 08:00  GMT+5:30'),[14, 0, 12, 1]],[new Date('27 May 2020, 08:00  GMT+5:30'),[15, 0, 12, 1]],[new Date('28 May 2020, 08:00  GMT+5:30'),[20, 0, 12, 1]],[new Date('29 May 2020, 08:00  GMT+5:30'),[21, 0, 12, 1]],[new Date('30 May 2020, 08:00  GMT+5:30'),[27, 0, 12, 1]],[new Date('31 May 2020, 08:00  GMT+5:30'),[27, 0, 12, 1]],[new Date('01 June 2020, 08:00  GMT+5:30'),[27, 0, 12, 1]],[new Date('02 June 2020, 08:00  GMT+5:30'),[27, 0, 12, 1]],[new Date('03 June 2020, 08:00  GMT+5:30'),[27, 0, 12, 1]],[new Date('04 June 2020, 08:00  GMT+5:30'),[33, 0, 13, 1]],[new Date('05 June 2020, 08:00  GMT+5:30'),[33, 0, 13, 1]],[new Date('06 June 2020, 08:00  GMT+5:30'),[33, 0, 13, 1]],[new Date('07 June 2020, 08:00  GMT+5:30'),[33, 0, 13, 1]],[new Date('08 June 2020, 08:00 GMT+5:30'),[36, 0, 13, 1]],[new Date('09 June 2020, 08:00  GMT+5:30'),[36, 0, 13, 1]],[new Date('10 June 2020, 08:00  GMT+5:30'),[43, 0, 13, 1]],[new Date('11 June 2020, 08:00  GMT+5:30'),[44, 0, 13, 1]],[new Date('12 June 2020, 08:00  GMT+5:30'),[44, 0, 18, 1]],[new Date('13 June 2020, 08:00  GMT+5:30'),[44, 0, 22, 1]],[new Date('14 June 2020, 08:00  GMT+5:30'),[44, 0, 22, 1]],[new Date('15 June 2020, 08:00  GMT+5:30'),[44, 0, 25, 1]],[new Date('16 June 2020, 08:00  GMT+5:30'),[44, 0, 25, 1]],[new Date('17 June 2020, 08:00  GMT+5:30'),[44, 0, 25, 1]],[new Date('18 June 2020, 08:00  GMT+5:30'),[44, 0, 30, 1]],[new Date('19 June 2020, 08:00  GMT+5:30'),[44, 0, 30, 1]],[new Date('20 June 2020, 08:00  GMT+5:30'),[44, 0, 33, 1]],[new Date('21 June 2020, 08:00  GMT+5:30'),[44, 0, 33, 1]],[new Date('22 June 2020, 08:00  GMT+5:30'),[44, 0, 33, 1]],[new Date('23 June 2020, 08:00  GMT+5:30'),[44, 0, 37, 1]],[new Date('24	June 2020, 08:00  GMT+5:30'),[46, 0, 37, 1]],[new Date('25	June 2020, 08:00  GMT+5:30'),[46, 0, 42, 1]],[new Date('26	June 2020, 08:00  GMT+5:30'),[46, 0, 42, 1]],[new Date('27	June 2020, 08:00  GMT+5:30'),[47, 0, 42, 1]],[new Date('28	June 2020, 08:00  GMT+5:30'),[47, 0, 42, 1]],[new Date('29	June 2020, 08:00  GMT+5:30'),[47, 0, 42, 1]],[new Date('30	June 2020, 08:00  GMT+5:30'),[47, 0, 42, 1]],[new Date('01	July 2020, 08:00  GMT+5:30'),[52, 0, 42, 1]],[new Date('02	July 2020, 08:00  GMT+5:30'),[52, 0, 42, 1]],[new Date('03	July 2020, 08:00  GMT+5:30'),[56, 0, 42, 1]],[new Date('04	July 2020, 08:00  GMT+5:30'),[62, 0, 43, 1]],[new Date('05	July 2020, 08:00  GMT+5:30'),[62, 0, 43, 1]],[new Date('06	July 2020, 08:00  GMT+5:30'),[62, 0, 43, 1]],[new Date('07	July 2020, 08:00  GMT+5:30'),[80, 0, 43, 1]],[new Date('08	July 2020, 08:00  GMT+5:30'),[80, 0, 43, 1]],[new Date('09	July 2020, 08:00  GMT+5:30'),[80, 0, 43, 1]],[new Date('10	July 2020, 08:00  GMT+5:30'),[113, 0, 66, 2]],[new Date('11	July 2020, 08:00  GMT+5:30'),[207, 0, 66, 2]],[new Date('12	July 2020, 08:00  GMT+5:30'),[207, 0, 66, 2]],[new Date('13	July 2020, 08:00  GMT+5:30'),[306, 0, 66, 2]],[new Date('14	July 2020, 08:00  GMT+5:30'),[318, 0, 66, 2]],[new Date('15	July 2020, 08:00  GMT+5:30'),[318, 0, 66, 2]],[new Date('16	July 2020, 08:00  GMT+5:30'),[346, 0, 66, 2]],[new Date('17	July 2020, 08:00  GMT+5:30'),[377, 0, 66, 2]],[new Date('18	July 2020, 08:00  GMT+5:30'),[403, 0, 66, 2]],[new Date('19	July 2020, 08:00  GMT+5:30'),[418, 0, 66, 2]],[new Date('20	July 2020, 08:00  GMT+5:30'),[450, 0, 66, 2]],[new Date('21	July 2020, 08:00  GMT+5:30'),[466, 0, 66, 4]],[new Date('22	July 2020, 08:00  GMT+5:30'),[490, 0, 70, 4]],[new Date('23	July 2020, 08:00  GMT+5:30'),[514, 0, 77, 4]],[new Date('24	July 2020, 08:00  GMT+5:30'),[534, 0, 78, 4]],[new Date('25	July 2020, 08:00  GMT+5:30'),[588, 0, 87, 5]],[new Date('26	July 2020, 08:00  GMT+5:30'),[646, 0, 94, 5]]];