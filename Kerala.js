var rawData=[[new Date(2020,02,15,12,0),[22, 0,3,0]],[new Date(2020,02,15,17,0),[22, 0,3,0]],[new Date(2020,02,15,23,30),[22, 0,3,0]],[new Date(2020,02,16,16,0),[23, 0,3,0]],[new Date(2020,02,17,9,15),[22, 2,3,0]],[new Date(2020,02,17,17,15),[24, 2,3,0]],[new Date(2020,02,24,20,15),[87, 8, 4, 0]],[new Date(2020,02,25,9,15),[101, 8, 4, 0]],[new Date(2020,02,25,18,45),[101, 8, 4, 0]],[new Date(2020,02,26,10,15),[110, 8, 4, 0]],[new Date(2020,02,26,20,00),[110, 8, 6, 0]],[new Date(2020,02,27,9,15),[129, 8, 11, 0]],[new Date(2020,02,28,9,30),[165, 8, 11, 0]],[new Date(2020,02,28,17,45),[168, 8, 11, 0]],[new Date(2020,02,29,10,00),[174, 8, 15, 1]],[new Date(2020,02,29,19,30),[182, 0, 15, 1]],[new Date(2020,02,30,10,30),[194, 0, 19, 1]],[new Date(2020,02,30,21,30),[202, 0, 19, 1]],[new Date(2020,02,31,20,30),[234, 0, 19, 1]],[new Date('01 April 2020, 09:00 GMT+5:30'),[241, 0, 23, 2]],[new Date('01 April 2020, 19:30 GMT+5:30'),[241, 0, 23, 2]],[new Date('02 April 2020, 09:00 GMT+5:30'),[265, 0, 25, 2]],[new Date('02 April 2020, 18:00 GMT+5:30'),[265, 0, 25, 2]],[new Date('03 April 2020, 09:00 GMT+5:30'),[286, 0, 27, 2]],[new Date('03 April 2020, 18:00 GMT+5:30'),[286, 0, 27, 2]],[new Date('04 April 2020, 09:00 GMT+5:30'),[295, 0, 41, 2]],[new Date('04 April 2020, 18:00 GMT+5:30'),[295, 0, 41, 2]],[new Date('05 April 2020, 09:00 GMT+5:30'),[306, 0, 49, 2]],[new Date('05 April 2020, 18:00 GMT+5:30'),[306, 0, 49, 2]],[new Date('06 April 2020, 09:00 GMT+5:30'),[314, 0, 55, 2]],[new Date('06 April 2020, 18:00 GMT+5:30'),[314, 0, 55, 2]],[new Date('07 April 2020, 09:00 GMT+5:30'),[327, 0, 58, 2]],[new Date('07 April 2020, 18:00 GMT+5:30'),[327, 0, 58, 2]],[new Date('08 April 2020, 08:00 GMT+5:30'),[336, 0, 70, 2]],[new Date('08 April 2020, 17:00 GMT+5:30'),[336, 0, 70, 2]],[new Date('09 April 2020, 08:00 GMT+5:30'),[345, 0, 83, 2]],[new Date('09 April 2020, 17:00 GMT+5:30'),[345, 0, 83, 2]],[new Date('10 April 2020, 08:00 GMT+5:30'),[357, 0, 96, 2]],[new Date('10 April 2020, 17:00 GMT+5:30'),[357, 0, 96, 2]],[new Date('11 April 2020, 08:00 GMT+5:30'),[364, 0, 123, 2]],[new Date('11 April 2020, 17:00 GMT+5:30'),[364, 0, 123, 2]],[new Date('12 April 2020, 08:00 GMT+5:30'),[364, 0, 123, 2]],[new Date('12 April 2020, 17:00 GMT+5:30'),[374, 0, 142, 2]],[new Date('13 April 2020, 08:00 GMT+5:30'),[376, 0, 179, 2]],[new Date('13 April 2020, 17:00 GMT+5:30'),[376, 0, 179, 3]],[new Date('14 April 2020, 08:00 GMT+5:30'),[379, 0, 198, 3]],[new Date('14 April 2020, 17:00 GMT+5:30'),[379, 0, 198, 3]],[new Date('15 April 2020, 08:00 GMT+5:30'),[387, 0, 211, 3]],[new Date('15 April 2020, 17:00 GMT+5:30'),[387, 0, 211, 3]],[new Date('16 April 2020, 08:00 GMT+5:30'),[388, 0, 218, 3]],[new Date('16 April 2020, 17:00 GMT+5:30'),[388, 0, 218, 3]],[new Date('17 April 2020, 08:00 GMT+5:30'),[395, 0, 245, 3]],[new Date('17 April 2020, 17:00 GMT+5:30'),[395, 0, 245, 3]],[new Date('18 April 2020, 08:00 GMT+5:30'),[396, 0, 255, 3]],[new Date('18 April 2020, 17:00 GMT+5:30'),[396, 0, 255, 3]],[new Date('19 April 2020, 08:00 GMT+5:30'),[400, 0, 257, 3]],[new Date('19 April 2020, 17:00 GMT+5:30'),[400, 0, 257, 3]],[new Date('20 April 2020, 08:00 GMT+5:30'),[402, 0, 270, 3]],[new Date('20 April 2020, 17:00 GMT+5:30'),[402, 0, 270, 3]],[new Date('21 April 2020, 08:00 GMT+5:30'),[408, 0, 291, 3]],[new Date('21 April 2020, 17:00 GMT+5:30'),[408, 0, 291, 3]],[new Date('22 April 2020, 08:00 GMT+5:30'),[427, 0, 307, 3]],[new Date('22 April 2020, 17:00 GMT+5:30'),[427, 0, 323, 3]],[new Date('23 April 2020, 08:00 GMT+5:30'),[438, 0, 323, 3]],[new Date('23 April 2020, 17:00 GMT+5:30'),[438, 0, 324, 3]],[new Date('24 April 2020, 08:00 GMT+5:30'),[447, 0, 324, 3]],[new Date('24 April 2020, 17:00 GMT+5:30'),[448, 0, 324, 3]],[new Date('25 April 2020, 08:00 GMT+5:30'),[450, 0, 331, 3]],[new Date('25 April 2020, 17:00 GMT+5:30'),[451, 0, 331, 4]],[new Date('26 April 2020, 08:00 GMT+5:30'),[457, 0, 338, 4]],[new Date('26 April 2020, 17:00 GMT+5:30'),[458, 0, 338, 4]],[new Date('27 April 2020, 08:00 GMT+5:30'),[458, 0, 338, 4]],[new Date('27 April 2020, 17:00 GMT+5:30'),[469, 0, 342, 4]],[new Date('28 April 2020, 08:00 GMT+5:30'),[481, 0, 355, 4]],[new Date('28 April 2020, 17:00 GMT+5:30'),[482, 0, 355, 4]],[new Date('29 April 2020, 08:00 GMT+5:30'),[485, 0, 359, 4]],[new Date('29 April 2020, 17:00 GMT+5:30'),[486, 0, 359, 4]],[new Date('30 April 2020, 08:00 GMT+5:30'),[495, 0, 369, 4]],[new Date('30 April 2020, 17:00 GMT+5:30'),[496, 0, 369, 4]],[new Date('01 May 2020, 08:00 GMT+5:30'),[497, 0, 383, 4]],[new Date('01 May 2020, 17:00 GMT+5:30'),[497, 0, 383, 4]],[new Date('02 May 2020, 08:00 GMT+5:30'),[497, 0, 392, 4]],[new Date('02 May 2020, 17:00 GMT+5:30'),[498, 0, 392, 4]],[new Date('03 May 2020, 08:00 GMT+5:30'),[499, 0, 400, 4]],[new Date('03 May 2020, 17:00 GMT+5:30'),[500, 0, 400, 4]],[new Date('04 May 2020, 08:00 GMT+5:30'),[500, 0, 401, 4]],[new Date('04 May 2020, 17:00  GMT+5:30'),[500, 0, 401, 4]],[new Date('05 May 2020, 08:00  GMT+5:30'),[500, 0, 462, 4]],[new Date('05 May 2020, 17:00  GMT+5:30'),[500, 0, 462, 4]],[new Date('06 May 2020, 08:00  GMT+5:30'),[502, 0, 462, 4]],[new Date('07 May 2020, 08:00  GMT+5:30'),[503, 0, 469, 4]],[new Date('08 May 2020, 08:00  GMT+5:30'),[503, 0, 474, 4]],[new Date('09 May 2020, 08:00  GMT+5:30'),[503, 0, 484, 4]],[new Date('10 May 2020, 08:00  GMT+5:30'),[505, 0, 485, 4]],[new Date('11 May 2020, 08:00  GMT+5:30'),[512, 0, 489, 4]],[new Date('12 May 2020, 08:00  GMT+5:30'),[519, 0, 489, 4]],[new Date('13 May 2020, 08:00  GMT+5:30'),[524, 0, 489, 4]],[new Date('14 May 2020, 08:00  GMT+5:30'),[534, 0, 490, 4]],[new Date('15 May 2020, 08:00  GMT+5:30'),[560, 0, 491, 4]],[new Date('16 May 2020, 08:00  GMT+5:30'),[576, 0, 492, 4]],[new Date('17 May 2020, 08:00  GMT+5:30'),[587, 0, 495, 4]],[new Date('18 May 2020, 08:00  GMT+5:30'),[601, 0, 497, 4]],[new Date('19 May 2020, 08:00  GMT+5:30'),[630, 0, 497, 4]],[new Date('20 May 2020, 08:00  GMT+5:30'),[642, 0, 497, 4]],[new Date('21 May 2020, 08:00  GMT+5:30'),[666, 0, 502, 4]],[new Date('22 May 2020, 08:00  GMT+5:30'),[690, 0, 510, 4]],[new Date('23 May 2020, 08:00  GMT+5:30'),[732, 0, 512, 4]],[new Date('24 May 2020, 08:00  GMT+5:30'),[795, 0, 515, 4]],[new Date('25 May 2020, 08:00  GMT+5:30'),[847, 0, 521, 4]],[new Date('26 May 2020, 08:00  GMT+5:30'),[896, 0, 532, 5]],[new Date('27 May 2020, 08:00  GMT+5:30'),[963, 0, 542, 6]],[new Date('28 May 2020, 08:00  GMT+5:30'),[1004, 0, 552, 7]],[new Date('29 May 2020, 08:00  GMT+5:30'),[1088, 0, 555, 7]],[new Date('30 May 2020, 08:00  GMT+5:30'),[1150, 0, 565, 8]],[new Date('31 May 2020, 08:00  GMT+5:30'),[1208, 0, 575, 9]]];