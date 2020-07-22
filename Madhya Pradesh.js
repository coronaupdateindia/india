var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[7, 0, 0, 0]],[new Date(2020,02,25,9,15),[9, 0, 0, 0]],[new Date(2020,02,25,18,45),[14, 0, 0, 0]],[new Date(2020,02,26,10,15),[15, 0, 0, 1]],[new Date(2020,02,26,20,00),[20, 0, 0, 1]],[new Date(2020,02,27,9,15),[20, 0, 0, 1]],[new Date(2020,02,28,9,30),[30, 0, 0, 2]],[new Date(2020,02,28,17,45),[30, 0, 0, 2]],[new Date(2020,02,29,10,00),[30, 0, 0, 2]],[new Date(2020,02,29,19,30),[30, 0, 0, 2]],[new Date(2020,02,30,10,30),[33, 0, 0, 2]],[new Date(2020,02,30,21,30),[47, 0, 0, 3]],[new Date(2020,02,31,20,30),[47, 0, 0, 3]],[new Date('01 April 2020, 09:00 GMT+5:30'),[47, 0, 0, 3]],[new Date('01 April 2020, 19:30 GMT+5:30'),[66, 0, 0, 3]],[new Date('02 April 2020, 09:00 GMT+5:30'),[99, 0, 0, 6]],[new Date('02 April 2020, 18:00 GMT+5:30'),[99, 0, 0, 6]],[new Date('03 April 2020, 09:00 GMT+5:30'),[99, 0, 0, 6]],[new Date('03 April 2020, 18:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('04 April 2020, 09:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('04 April 2020, 18:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('05 April 2020, 09:00 GMT+5:30'),[104, 0, 0, 6]],[new Date('05 April 2020, 18:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('06 April 2020, 09:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('06 April 2020, 18:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('07 April 2020, 09:00 GMT+5:30'),[165, 0, 0, 9]],[new Date('07 April 2020, 18:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('08 April 2020, 08:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('08 April 2020, 17:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('09 April 2020, 08:00 GMT+5:30'),[229, 0, 0, 13]],[new Date('09 April 2020, 17:00 GMT+5:30'),[259, 0, 0, 16]],[new Date('10 April 2020, 08:00 GMT+5:30'),[259, 0, 0, 16]],[new Date('10 April 2020, 17:00 GMT+5:30'),[259, 0, 0, 16]],[new Date('11 April 2020, 08:00 GMT+5:30'),[435, 0, 0, 33]],[new Date('11 April 2020, 17:00 GMT+5:30'),[443, 0, 0, 33]],[new Date('12 April 2020, 08:00 GMT+5:30'),[532, 0, 0, 36]],[new Date('12 April 2020, 17:00 GMT+5:30'),[564, 0, 0, 36]],[new Date('13 April 2020, 08:00 GMT+5:30'),[564, 0, 0, 36]],[new Date('13 April 2020, 17:00 GMT+5:30'),[604, 0, 44, 43]],[new Date('14 April 2020, 08:00 GMT+5:30'),[604, 0, 44, 43]],[new Date('14 April 2020, 17:00 GMT+5:30'),[730, 0, 51, 50]],[new Date('15 April 2020, 08:00 GMT+5:30'),[730, 0, 51, 50]],[new Date('15 April 2020, 17:00 GMT+5:30'),[987, 0, 64, 53]],[new Date('16 April 2020, 08:00 GMT+5:30'),[987, 0, 64, 53]],[new Date('16 April 2020, 17:00 GMT+5:30'),[1120, 0, 64, 53]],[new Date('17 April 2020, 08:00 GMT+5:30'),[1120, 0, 64, 53]],[new Date('17 April 2020, 17:00 GMT+5:30'),[1308, 0, 65, 57]],[new Date('18 April 2020, 08:00 GMT+5:30'),[1310, 0, 69, 69]],[new Date('18 April 2020, 17:00 GMT+5:30'),[1355, 0, 69, 69]],[new Date('19 April 2020, 08:00 GMT+5:30'),[1407, 0, 127, 70]],[new Date('19 April 2020, 17:00 GMT+5:30'),[1407, 0, 127, 70]],[new Date('20 April 2020, 08:00 GMT+5:30'),[1407, 0, 127, 70]],[new Date('20 April 2020, 17:00 GMT+5:30'),[1485, 0, 127, 74]],[new Date('21 April 2020, 08:00 GMT+5:30'),[1485, 0, 127, 74]],[new Date('21 April 2020, 17:00 GMT+5:30'),[1540, 0, 127, 76]],[new Date('22 April 2020, 08:00 GMT+5:30'),[1552, 0, 148, 76]],[new Date('22 April 2020, 17:00 GMT+5:30'),[1592, 0, 148, 80]],[new Date('23 April 2020, 08:00 GMT+5:30'),[1592, 0, 148, 80]],[new Date('23 April 2020, 17:00 GMT+5:30'),[1695, 0, 148, 81]],[new Date('24 April 2020, 08:00 GMT+5:30'),[1699, 0, 203, 83]],[new Date('24 April 2020, 17:00 GMT+5:30'),[1852, 0, 203, 83]],[new Date('25 April 2020, 08:00 GMT+5:30'),[1852, 0, 210, 92]],[new Date('25 April 2020, 17:00 GMT+5:30'),[1952, 0, 210, 92]],[new Date('26 April 2020, 08:00 GMT+5:30'),[2096, 0, 210, 99]],[new Date('26 April 2020, 17:00 GMT+5:30'),[2096, 0, 210, 99]],[new Date('27 April 2020, 08:00 GMT+5:30'),[2096, 0, 302, 103]],[new Date('27 April 2020, 17:00 GMT+5:30'),[2168, 0, 302, 106]],[new Date('28 April 2020, 08:00 GMT+5:30'),[2168, 0, 302, 110]],[new Date('28 April 2020, 17:00 GMT+5:30'),[2368, 0, 361, 113]],[new Date('29 April 2020, 08:00 GMT+5:30'),[2387, 0, 377, 120]],[new Date('29 April 2020, 17:00 GMT+5:30'),[2561, 0, 377, 119]],[new Date('30 April 2020, 08:00 GMT+5:30'),[2561, 0, 461, 129]],[new Date('30 April 2020, 17:00 GMT+5:30'),[2660, 0, 461, 130]],[new Date('01 May 2020, 08:00 GMT+5:30'),[2660, 0, 482, 137]],[new Date('01 May 2020, 17:00 GMT+5:30'),[2719, 0, 482, 137]],[new Date('02 May 2020, 08:00 GMT+5:30'),[2719, 0, 524, 145]],[new Date('02 May 2020, 17:00 GMT+5:30'),[2719, 0, 524, 145]],[new Date('03 May 2020, 08:00 GMT+5:30'),[2846, 0, 624, 151]],[new Date('03 May 2020, 17:00 GMT+5:30'),[2846, 0, 798, 156]],[new Date('04 May 2020, 08:00 GMT+5:30'),[2846, 0, 798, 156]],[new Date('04 May 2020, 17:00  GMT+5:30'),[2942, 0, 798, 165]],[new Date('05 May 2020, 08:00  GMT+5:30'),[2942, 0, 798, 165]],[new Date('05 May 2020, 17:00  GMT+5:30'),[3049, 0, 1000, 176]],[new Date('06 May 2020, 08:00  GMT+5:30'),[3049, 0, 1000, 176]],[new Date('07 May 2020, 08:00  GMT+5:30'),[3138, 0, 1099, 185]],[new Date('08 May 2020, 08:00  GMT+5:30'),[3252, 0, 1231, 193]],[new Date('09 May 2020, 08:00  GMT+5:30'),[3341, 0, 1349, 200]],[new Date('10 May 2020, 08:00  GMT+5:30'),[3614, 0, 1676, 215]],[new Date('11 May 2020, 08:00  GMT+5:30'),[3614, 0, 1676, 215]],[new Date('12 May 2020, 08:00  GMT+5:30'),[3785, 0, 1747, 221]],[new Date('13 May 2020, 08:00  GMT+5:30'),[3986, 0, 1860, 225]],[new Date('14 May 2020, 08:00  GMT+5:30'),[4173, 0, 2004, 232]],[new Date('15 May 2020, 08:00  GMT+5:30'),[4426, 0, 2171, 237]],[new Date('16 May 2020, 08:00  GMT+5:30'),[4595, 0, 2283, 239]],[new Date('17 May 2020, 08:00  GMT+5:30'),[4789, 0, 2315, 243]],[new Date('18 May 2020, 08:00  GMT+5:30'),[4977, 0, 2403, 248]],[new Date('19 May 2020, 08:00  GMT+5:30'),[5236, 0, 2435, 252]],[new Date('20 May 2020, 08:00  GMT+5:30'),[5465, 0, 2630, 258]],[new Date('21 May 2020, 08:00  GMT+5:30'),[5735, 0, 2733, 267]],[new Date('22 May 2020, 08:00  GMT+5:30'),[5981, 0, 2843, 270]],[new Date('23 May 2020, 08:00  GMT+5:30'),[6170, 0, 3089, 272]],[new Date('24 May 2020, 08:00  GMT+5:30'),[6371, 0, 3267, 281]],[new Date('25 May 2020, 08:00  GMT+5:30'),[6665, 0, 3408, 290]],[new Date('26 May 2020, 08:00  GMT+5:30'),[6859, 0, 3571, 300]],[new Date('27 May 2020, 08:00  GMT+5:30'),[7024, 0, 3689, 305]],[new Date('28 May 2020, 08:00  GMT+5:30'),[7261, 0, 3927, 313]],[new Date('29 May 2020, 08:00  GMT+5:30'),[7453, 0, 4050, 321]],[new Date('30 May 2020, 08:00  GMT+5:30'),[7645, 0, 4269, 334]],[new Date('31 May 2020, 08:00  GMT+5:30'),[7891, 0, 4444, 343]],[new Date('01 June 2020, 08:00  GMT+5:30'),[8089, 0, 4842, 350]],[new Date('02 June 2020, 08:00  GMT+5:30'),[8283, 0, 5003, 358]],[new Date('03 June 2020, 08:00  GMT+5:30'),[8420, 0, 5221, 364]],[new Date('04 June 2020, 08:00  GMT+5:30'),[8588, 0, 5445, 371]],[new Date('05 June 2020, 08:00  GMT+5:30'),[8762, 0, 5637, 377]],[new Date('06 June 2020, 08:00  GMT+5:30'),[8996, 0, 5878, 384]],[new Date('07 June 2020, 08:00  GMT+5:30'),[9228, 0, 6108, 399]],[new Date('08 June 2020, 08:00 GMT+5:30'),[9401, 0, 6331, 412]],[new Date('09 June 2020, 08:00  GMT+5:30'),[9638, 0, 6536, 414]],[new Date('10 June 2020, 08:00  GMT+5:30'),[9849, 0, 6729, 420]],[new Date('11 June 2020, 08:00  GMT+5:30'),[10049, 0, 6892, 427]],[new Date('12 June 2020, 08:00  GMT+5:30'),[10241, 0, 7042, 431]],[new Date('13 June 2020, 08:00  GMT+5:30'),[10443, 0, 7201, 440]],[new Date('14 June 2020, 08:00  GMT+5:30'),[10641, 0, 7377, 447]],[new Date('15 June 2020, 08:00  GMT+5:30'),[10802, 0, 7677, 459]],[new Date('16 June 2020, 08:00  GMT+5:30'),[10935, 0, 7903, 465]],[new Date('17 June 2020, 08:00  GMT+5:30'),[11083, 0, 8152, 476]],[new Date('18 June 2020, 08:00  GMT+5:30'),[11244, 0, 8388, 482]],[new Date('19 June 2020, 08:00  GMT+5:30'),[11426, 0, 8632, 486]],[new Date('20 June 2020, 08:00  GMT+5:30'),[11582, 0, 8748, 495]],[new Date('21 June 2020, 08:00  GMT+5:30'),[11724, 0, 8880, 501]],[new Date('22 June 2020, 08:00  GMT+5:30'),[11903, 0, 9015, 515]],[new Date('23 June 2020, 08:00  GMT+5:30'),[12078, 0, 9215, 521]],[new Date('24	June 2020, 08:00  GMT+5:30'),[12261, 0, 9335, 525]],[new Date('25	June 2020, 08:00  GMT+5:30'),[12448, 0, 9473, 534]],[new Date('26	June 2020, 08:00  GMT+5:30'),[12596, 0, 9619, 542]],[new Date('27	June 2020, 08:00  GMT+5:30'),[12798, 0, 9804, 546]],[new Date('28	June 2020, 08:00  GMT+5:30'),[12965, 0, 9971, 550]],[new Date('29	June 2020, 08:00  GMT+5:30'),[13186, 0, 10084, 557]],[new Date('30	June 2020, 08:00  GMT+5:30'),[13370, 0, 10199, 564]],[new Date('01	July 2020, 08:00  GMT+5:30'),[13593, 0, 10395, 572]],[new Date('02	July 2020, 08:00  GMT+5:30'),[13861, 0, 10655, 581]],[new Date('03	July 2020, 08:00  GMT+5:30'),[14106, 0, 10815, 589]],[new Date('04	July 2020, 08:00  GMT+5:30'),[14297, 0, 11049, 593]],[new Date('05	July 2020, 08:00  GMT+5:30'),[14604, 0, 11234, 598]],[new Date('06	July 2020, 08:00  GMT+5:30'),[14930, 0, 11411, 608]],[new Date('07	July 2020, 08:00  GMT+5:30'),[15284, 0, 11579, 617]],[new Date('08	July 2020, 08:00  GMT+5:30'),[15627, 0, 11768, 622]],[new Date('09	July 2020, 08:00  GMT+5:30'),[16036, 0, 11987, 629]],[new Date('10	July 2020, 08:00  GMT+5:30'),[16341, 0, 12232, 634]],[new Date('11	July 2020, 08:00  GMT+5:30'),[16657, 0, 12481, 638]],[new Date('12	July 2020, 08:00  GMT+5:30'),[17201, 0, 12679, 644]],[new Date('13	July 2020, 08:00  GMT+5:30'),[17632, 0, 12876, 653]],[new Date('14	July 2020, 08:00  GMT+5:30'),[18207, 0, 13208, 663]],[new Date('15	July 2020, 08:00  GMT+5:30'),[19005, 0, 13575, 673]],[new Date('16	July 2020, 08:00  GMT+5:30'),[19643, 0, 13908, 682]],[new Date('17	July 2020, 08:00  GMT+5:30'),[20378, 0, 14127, 689]],[new Date('18	July 2020, 08:00  GMT+5:30'),[21081, 0, 14514, 697]],[new Date('19	July 2020, 08:00  GMT+5:30'),[21763, 0, 14864, 706]],[new Date('20	July 2020, 08:00  GMT+5:30'),[22600, 0, 15311, 721]],[new Date('21	July 2020, 08:00  GMT+5:30'),[23310, 0, 15684, 738]],[new Date('22	July 2020, 08:00  GMT+5:30'),[24095, 0, 16257, 756]]];