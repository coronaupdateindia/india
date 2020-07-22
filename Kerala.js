var rawData=[[new Date(2020,02,15,12,0),[22, 0,3,0]],[new Date(2020,02,15,17,0),[22, 0,3,0]],[new Date(2020,02,15,23,30),[22, 0,3,0]],[new Date(2020,02,16,16,0),[23, 0,3,0]],[new Date(2020,02,17,9,15),[22, 2,3,0]],[new Date(2020,02,17,17,15),[24, 2,3,0]],[new Date(2020,02,24,20,15),[87, 8, 4, 0]],[new Date(2020,02,25,9,15),[101, 8, 4, 0]],[new Date(2020,02,25,18,45),[101, 8, 4, 0]],[new Date(2020,02,26,10,15),[110, 8, 4, 0]],[new Date(2020,02,26,20,00),[110, 8, 6, 0]],[new Date(2020,02,27,9,15),[129, 8, 11, 0]],[new Date(2020,02,28,9,30),[165, 8, 11, 0]],[new Date(2020,02,28,17,45),[168, 8, 11, 0]],[new Date(2020,02,29,10,00),[174, 8, 15, 1]],[new Date(2020,02,29,19,30),[182, 0, 15, 1]],[new Date(2020,02,30,10,30),[194, 0, 19, 1]],[new Date(2020,02,30,21,30),[202, 0, 19, 1]],[new Date(2020,02,31,20,30),[234, 0, 19, 1]],[new Date('01 April 2020, 09:00 GMT+5:30'),[241, 0, 23, 2]],[new Date('01 April 2020, 19:30 GMT+5:30'),[241, 0, 23, 2]],[new Date('02 April 2020, 09:00 GMT+5:30'),[265, 0, 25, 2]],[new Date('02 April 2020, 18:00 GMT+5:30'),[265, 0, 25, 2]],[new Date('03 April 2020, 09:00 GMT+5:30'),[286, 0, 27, 2]],[new Date('03 April 2020, 18:00 GMT+5:30'),[286, 0, 27, 2]],[new Date('04 April 2020, 09:00 GMT+5:30'),[295, 0, 41, 2]],[new Date('04 April 2020, 18:00 GMT+5:30'),[295, 0, 41, 2]],[new Date('05 April 2020, 09:00 GMT+5:30'),[306, 0, 49, 2]],[new Date('05 April 2020, 18:00 GMT+5:30'),[306, 0, 49, 2]],[new Date('06 April 2020, 09:00 GMT+5:30'),[314, 0, 55, 2]],[new Date('06 April 2020, 18:00 GMT+5:30'),[314, 0, 55, 2]],[new Date('07 April 2020, 09:00 GMT+5:30'),[327, 0, 58, 2]],[new Date('07 April 2020, 18:00 GMT+5:30'),[327, 0, 58, 2]],[new Date('08 April 2020, 08:00 GMT+5:30'),[336, 0, 70, 2]],[new Date('08 April 2020, 17:00 GMT+5:30'),[336, 0, 70, 2]],[new Date('09 April 2020, 08:00 GMT+5:30'),[345, 0, 83, 2]],[new Date('09 April 2020, 17:00 GMT+5:30'),[345, 0, 83, 2]],[new Date('10 April 2020, 08:00 GMT+5:30'),[357, 0, 96, 2]],[new Date('10 April 2020, 17:00 GMT+5:30'),[357, 0, 96, 2]],[new Date('11 April 2020, 08:00 GMT+5:30'),[364, 0, 123, 2]],[new Date('11 April 2020, 17:00 GMT+5:30'),[364, 0, 123, 2]],[new Date('12 April 2020, 08:00 GMT+5:30'),[364, 0, 123, 2]],[new Date('12 April 2020, 17:00 GMT+5:30'),[374, 0, 142, 2]],[new Date('13 April 2020, 08:00 GMT+5:30'),[376, 0, 179, 2]],[new Date('13 April 2020, 17:00 GMT+5:30'),[376, 0, 179, 3]],[new Date('14 April 2020, 08:00 GMT+5:30'),[379, 0, 198, 3]],[new Date('14 April 2020, 17:00 GMT+5:30'),[379, 0, 198, 3]],[new Date('15 April 2020, 08:00 GMT+5:30'),[387, 0, 211, 3]],[new Date('15 April 2020, 17:00 GMT+5:30'),[387, 0, 211, 3]],[new Date('16 April 2020, 08:00 GMT+5:30'),[388, 0, 218, 3]],[new Date('16 April 2020, 17:00 GMT+5:30'),[388, 0, 218, 3]],[new Date('17 April 2020, 08:00 GMT+5:30'),[395, 0, 245, 3]],[new Date('17 April 2020, 17:00 GMT+5:30'),[395, 0, 245, 3]],[new Date('18 April 2020, 08:00 GMT+5:30'),[396, 0, 255, 3]],[new Date('18 April 2020, 17:00 GMT+5:30'),[396, 0, 255, 3]],[new Date('19 April 2020, 08:00 GMT+5:30'),[400, 0, 257, 3]],[new Date('19 April 2020, 17:00 GMT+5:30'),[400, 0, 257, 3]],[new Date('20 April 2020, 08:00 GMT+5:30'),[402, 0, 270, 3]],[new Date('20 April 2020, 17:00 GMT+5:30'),[402, 0, 270, 3]],[new Date('21 April 2020, 08:00 GMT+5:30'),[408, 0, 291, 3]],[new Date('21 April 2020, 17:00 GMT+5:30'),[408, 0, 291, 3]],[new Date('22 April 2020, 08:00 GMT+5:30'),[427, 0, 307, 3]],[new Date('22 April 2020, 17:00 GMT+5:30'),[427, 0, 323, 3]],[new Date('23 April 2020, 08:00 GMT+5:30'),[438, 0, 323, 3]],[new Date('23 April 2020, 17:00 GMT+5:30'),[438, 0, 324, 3]],[new Date('24 April 2020, 08:00 GMT+5:30'),[447, 0, 324, 3]],[new Date('24 April 2020, 17:00 GMT+5:30'),[448, 0, 324, 3]],[new Date('25 April 2020, 08:00 GMT+5:30'),[450, 0, 331, 3]],[new Date('25 April 2020, 17:00 GMT+5:30'),[451, 0, 331, 4]],[new Date('26 April 2020, 08:00 GMT+5:30'),[457, 0, 338, 4]],[new Date('26 April 2020, 17:00 GMT+5:30'),[458, 0, 338, 4]],[new Date('27 April 2020, 08:00 GMT+5:30'),[458, 0, 338, 4]],[new Date('27 April 2020, 17:00 GMT+5:30'),[469, 0, 342, 4]],[new Date('28 April 2020, 08:00 GMT+5:30'),[481, 0, 355, 4]],[new Date('28 April 2020, 17:00 GMT+5:30'),[482, 0, 355, 4]],[new Date('29 April 2020, 08:00 GMT+5:30'),[485, 0, 359, 4]],[new Date('29 April 2020, 17:00 GMT+5:30'),[486, 0, 359, 4]],[new Date('30 April 2020, 08:00 GMT+5:30'),[495, 0, 369, 4]],[new Date('30 April 2020, 17:00 GMT+5:30'),[496, 0, 369, 4]],[new Date('01 May 2020, 08:00 GMT+5:30'),[497, 0, 383, 4]],[new Date('01 May 2020, 17:00 GMT+5:30'),[497, 0, 383, 4]],[new Date('02 May 2020, 08:00 GMT+5:30'),[497, 0, 392, 4]],[new Date('02 May 2020, 17:00 GMT+5:30'),[498, 0, 392, 4]],[new Date('03 May 2020, 08:00 GMT+5:30'),[499, 0, 400, 4]],[new Date('03 May 2020, 17:00 GMT+5:30'),[500, 0, 400, 4]],[new Date('04 May 2020, 08:00 GMT+5:30'),[500, 0, 401, 4]],[new Date('04 May 2020, 17:00  GMT+5:30'),[500, 0, 401, 4]],[new Date('05 May 2020, 08:00  GMT+5:30'),[500, 0, 462, 4]],[new Date('05 May 2020, 17:00  GMT+5:30'),[500, 0, 462, 4]],[new Date('06 May 2020, 08:00  GMT+5:30'),[502, 0, 462, 4]],[new Date('07 May 2020, 08:00  GMT+5:30'),[503, 0, 469, 4]],[new Date('08 May 2020, 08:00  GMT+5:30'),[503, 0, 474, 4]],[new Date('09 May 2020, 08:00  GMT+5:30'),[503, 0, 484, 4]],[new Date('10 May 2020, 08:00  GMT+5:30'),[505, 0, 485, 4]],[new Date('11 May 2020, 08:00  GMT+5:30'),[512, 0, 489, 4]],[new Date('12 May 2020, 08:00  GMT+5:30'),[519, 0, 489, 4]],[new Date('13 May 2020, 08:00  GMT+5:30'),[524, 0, 489, 4]],[new Date('14 May 2020, 08:00  GMT+5:30'),[534, 0, 490, 4]],[new Date('15 May 2020, 08:00  GMT+5:30'),[560, 0, 491, 4]],[new Date('16 May 2020, 08:00  GMT+5:30'),[576, 0, 492, 4]],[new Date('17 May 2020, 08:00  GMT+5:30'),[587, 0, 495, 4]],[new Date('18 May 2020, 08:00  GMT+5:30'),[601, 0, 497, 4]],[new Date('19 May 2020, 08:00  GMT+5:30'),[630, 0, 497, 4]],[new Date('20 May 2020, 08:00  GMT+5:30'),[642, 0, 497, 4]],[new Date('21 May 2020, 08:00  GMT+5:30'),[666, 0, 502, 4]],[new Date('22 May 2020, 08:00  GMT+5:30'),[690, 0, 510, 4]],[new Date('23 May 2020, 08:00  GMT+5:30'),[732, 0, 512, 4]],[new Date('24 May 2020, 08:00  GMT+5:30'),[795, 0, 515, 4]],[new Date('25 May 2020, 08:00  GMT+5:30'),[847, 0, 521, 4]],[new Date('26 May 2020, 08:00  GMT+5:30'),[896, 0, 532, 5]],[new Date('27 May 2020, 08:00  GMT+5:30'),[963, 0, 542, 6]],[new Date('28 May 2020, 08:00  GMT+5:30'),[1004, 0, 552, 7]],[new Date('29 May 2020, 08:00  GMT+5:30'),[1088, 0, 555, 7]],[new Date('30 May 2020, 08:00  GMT+5:30'),[1150, 0, 565, 8]],[new Date('31 May 2020, 08:00  GMT+5:30'),[1208, 0, 575, 9]],[new Date('01 June 2020, 08:00  GMT+5:30'),[1269, 0, 590, 9]],[new Date('02 June 2020, 08:00  GMT+5:30'),[1326, 0, 608, 10]],[new Date('03 June 2020, 08:00  GMT+5:30'),[1412, 0, 627, 11]],[new Date('04 June 2020, 08:00  GMT+5:30'),[1494, 0, 651, 11]],[new Date('05 June 2020, 08:00  GMT+5:30'),[1588, 0, 690, 14]],[new Date('06 June 2020, 08:00  GMT+5:30'),[1699, 0, 712, 14]],[new Date('07 June 2020, 08:00  GMT+5:30'),[1807, 0, 762, 15]],[new Date('08 June 2020, 08:00 GMT+5:30'),[1914, 0, 803, 15]],[new Date('09 June 2020, 08:00  GMT+5:30'),[2005, 0, 814, 16]],[new Date('10 June 2020, 08:00  GMT+5:30'),[2096, 0, 848, 16]],[new Date('11 June 2020, 08:00  GMT+5:30'),[2161, 0, 905, 18]],[new Date('12 June 2020, 08:00  GMT+5:30'),[2244, 0, 968, 18]],[new Date('13 June 2020, 08:00  GMT+5:30'),[2322, 0, 1000, 19]],[new Date('14 June 2020, 08:00  GMT+5:30'),[2407, 0, 1046, 19]],[new Date('15 June 2020, 08:00  GMT+5:30'),[2461, 0, 1102, 19]],[new Date('16 June 2020, 08:00  GMT+5:30'),[2543, 0, 1175, 20]],[new Date('17 June 2020, 08:00  GMT+5:30'),[2622, 0, 1236, 20]],[new Date('18 June 2020, 08:00  GMT+5:30'),[2697, 0, 1326, 20]],[new Date('19 June 2020, 08:00  GMT+5:30'),[2794, 0, 1415, 21]],[new Date('20 June 2020, 08:00  GMT+5:30'),[2912, 0, 1511, 21]],[new Date('21 June 2020, 08:00  GMT+5:30'),[3039, 0, 1568, 21]],[new Date('22 June 2020, 08:00  GMT+5:30'),[3172, 0, 1661, 21]],[new Date('23 June 2020, 08:00  GMT+5:30'),[3310, 0, 1749, 21]],[new Date('24	June 2020, 08:00  GMT+5:30'),[3451, 0, 1809, 22]],[new Date('25	June 2020, 08:00  GMT+5:30'),[3603, 0, 1888, 22]],[new Date('26	June 2020, 08:00  GMT+5:30'),[3726, 0, 1943, 22]],[new Date('27	June 2020, 08:00  GMT+5:30'),[3876, 0, 2008, 22]],[new Date('28	June 2020, 08:00  GMT+5:30'),[4071, 0, 2110, 22]],[new Date('29	June 2020, 08:00  GMT+5:30'),[4189, 0, 2152, 22]],[new Date('30	June 2020, 08:00  GMT+5:30'),[4189, 0, 2152, 22]],[new Date('01	July 2020, 08:00  GMT+5:30'),[4442, 0, 2306, 24]],[new Date('02	July 2020, 08:00  GMT+5:30'),[4593, 0, 2439, 24]],[new Date('03	July 2020, 08:00  GMT+5:30'),[4753, 0, 2640, 25]],[new Date('04	July 2020, 08:00  GMT+5:30'),[4964, 0, 2841, 25]],[new Date('05	July 2020, 08:00  GMT+5:30'),[5204, 0, 3048, 25]],[new Date('06	July 2020, 08:00  GMT+5:30'),[5429, 0, 3174, 25]],[new Date('07	July 2020, 08:00  GMT+5:30'),[5622, 0, 3341, 27]],[new Date('08	July 2020, 08:00  GMT+5:30'),[5894, 0, 3452, 27]],[new Date('09	July 2020, 08:00  GMT+5:30'),[6195, 0, 3559, 27]],[new Date('10	July 2020, 08:00  GMT+5:30'),[6534, 0, 3708, 27]],[new Date('11	July 2020, 08:00  GMT+5:30'),[6950, 0, 3820, 27]],[new Date('12	July 2020, 08:00  GMT+5:30'),[7438, 0, 3963, 29]],[new Date('13	July 2020, 08:00  GMT+5:30'),[7873, 0, 4095, 31]],[new Date('14	July 2020, 08:00  GMT+5:30'),[8322, 0, 4257, 33]],[new Date('15	July 2020, 08:00  GMT+5:30'),[8930, 0, 4438, 34]],[new Date('16	July 2020, 08:00  GMT+5:30'),[9553, 0, 4634, 35]],[new Date('17	July 2020, 08:00  GMT+5:30'),[10275, 0, 4862, 37]],[new Date('18	July 2020, 08:00  GMT+5:30'),[11066, 0, 4995, 38]],[new Date('19	July 2020, 08:00  GMT+5:30'),[11659, 0, 5199, 40]],[new Date('20	July 2020, 08:00  GMT+5:30'),[12480, 0, 5371, 42]],[new Date('21	July 2020, 08:00  GMT+5:30'),[13274, 0, 5616, 43]],[new Date('22	July 2020, 08:00  GMT+5:30'),[13994, 0, 5890, 44]]];