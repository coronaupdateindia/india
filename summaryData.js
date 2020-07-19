var rawData=[[new Date(2020,02,15,12,0),[90,17,9,2]],[new Date(2020,02,15,17,0),[90,17,10,2]],[new Date(2020,02,15,23,30),[93,17,13,2]],[new Date(2020,02,16,16,0),[97,17,13,2]],[new Date(2020,02,17,9,15),[103,22,13,2]],[new Date(2020,02,17,17,15),[113,24,14,3]],[new Date(2020,02,24,20,15),[476, 43, 40, 10]],[new Date(2020,02,25,9,15),[519, 43, 41, 9]],[new Date(2020,02,25,18,45),[563, 43, 43, 10]],[new Date(2020,02,26,10,15),[602, 47, 43, 13]],[new Date(2020,02,26,20,00),[647, 47, 45, 16]],[new Date(2020,02,27,9,15),[677, 47, 67, 17]],[new Date(2020,02,28,9,30),[826, 47, 79, 19]],[new Date(2020,02,28,17,45),[862+9, 47, 80, 19]],[new Date(2020,02,29,10,00),[931, 48, 87, 25]],[new Date(2020,02,29,19,30),[1024, 0, 96, 27]],[new Date(2020,02,30,10,30),[1071, 0, 100, 29]],[new Date(2020,02,30,21,30),[1205+46, 0, 102, 32]],[new Date(2020,02,31,20,30),[1359+38, 0, 124, 35]],[new Date('01 April 2020, 09:00 GMT+5:30'),[1637, 0, 133, 38]],[new Date('01 April 2020, 19:30 GMT+5:30'),[1834, 0, 144, 41]],[new Date('02 April 2020, 09:00 GMT+5:30'),[1965, 0, 151, 50]],[new Date('02 April 2020, 18:00 GMT+5:30'),[2069, 0, 156, 53]],[new Date('03 April 2020, 09:00 GMT+5:30'),[2283+18, 0, 157, 56]],[new Date('03 April 2020, 18:00 GMT+5:30'),[2470+77, 0, 163, 62]],[new Date('04 April 2020, 09:00 GMT+5:30'),[2902, 0, 184, 68]],[new Date('04 April 2020, 18:00 GMT+5:30'),[3072, 0, 213, 75]],[new Date('05 April 2020, 09:00 GMT+5:30'),[3374, 0, 267, 77]],[new Date('05 April 2020, 18:00 GMT+5:30'),[3577, 0, 275, 83]],[new Date('06 April 2020, 09:00 GMT+5:30'),[4067, 0, 292, 109]],[new Date('06 April 2020, 18:00 GMT+5:30'),[4281, 0, 319, 111]],[new Date('07 April 2020, 09:00 GMT+5:30'),[4421, 0, 326, 114]],[new Date('07 April 2020, 18:00 GMT+5:30'),[4789, 0, 353, 124]],[new Date('08 April 2020, 08:00 GMT+5:30'),[5194, 0, 402, 149]],[new Date('08 April 2020, 17:00 GMT+5:30'),[5274, 0, 411, 149]],[new Date('09 April 2020, 08:00 GMT+5:30'),[5734, 0, 473, 166]],[new Date('09 April 2020, 17:00 GMT+5:30'),[5865, 0, 478, 169]],[new Date('10 April 2020, 08:00 GMT+5:30'),[6412, 0, 504, 199]],[new Date('10 April 2020, 17:00 GMT+5:30'),[6761, 0, 516, 206]],[new Date('11 April 2020, 08:00 GMT+5:30'),[7447, 0, 643, 239]],[new Date('11 April 2020, 17:00 GMT+5:30'),[7529, 0, 653, 242]],[new Date('12 April 2020, 08:00 GMT+5:30'),[8356, 0, 716, 273]],[new Date('12 April 2020, 17:00 GMT+5:30'),[8447, 0, 765, 273]],[new Date('13 April 2020, 08:00 GMT+5:30'),[9152, 0, 857, 308]],[new Date('13 April 2020, 17:00 GMT+5:30'),[9352, 0, 980, 324]],[new Date('14 April 2020, 08:00 GMT+5:30'),[10363, 0, 1036, 339]],[new Date('14 April 2020, 17:00 GMT+5:30'),[10815, 0, 1190, 353]],[new Date('15 April 2020, 08:00 GMT+5:30'),[11439, 0, 1306, 377]],[new Date('15 April 2020, 17:00 GMT+5:30'),[11933, 0, 1344, 392]],[new Date('16 April 2020, 08:00 GMT+5:30'),[12380, 0, 1489, 414]],[new Date('16 April 2020, 17:00 GMT+5:30'),[12759, 0, 1515, 420]],[new Date('17 April 2020, 08:00 GMT+5:30'),[13387, 0, 1749, 437]],[new Date('17 April 2020, 17:00 GMT+5:30'),[13835, 0, 1767, 452]],[new Date('18 April 2020, 08:00 GMT+5:30'),[14378, 0, 1992, 480]],[new Date('18 April 2020, 17:00 GMT+5:30'),[14792, 0, 2015, 488]],[new Date('19 April 2020, 08:00 GMT+5:30'),[15712, 0, 2231, 507]],[new Date('19 April 2020, 17:00 GMT+5:30'),[16116, 0, 2302, 519]],[new Date('20 April 2020, 08:00 GMT+5:30'),[17265, 0, 2547, 543]],[new Date('20 April 2020, 17:00 GMT+5:30'),[17656, 0, 2842, 559]],[new Date('21 April 2020, 08:00 GMT+5:30'),[18601, 0, 3252, 590]],[new Date('21 April 2020, 17:00 GMT+5:30'),[18985, 0, 3260, 603]],[new Date('22 April 2020, 08:00 GMT+5:30'),[19984, 0, 3870, 640]],[new Date('22 April 2020, 17:00 GMT+5:30'),[20471, 0, 3960, 652]],[new Date('23 April 2020, 08:00 GMT+5:30'),[21393, 0, 4258, 681]],[new Date('23 April 2020, 17:00 GMT+5:30'),[21700, 0, 4325, 686]],[new Date('24 April 2020, 08:00 GMT+5:30'),[23077, 0, 4749, 718]],[new Date('24 April 2020, 17:00 GMT+5:30'),[23452, 0, 4814, 723]],[new Date('25 April 2020, 08:00 GMT+5:30'),[24506, 0, 5063, 775]],[new Date('25 April 2020, 17:00 GMT+5:30'),[24893+49, 0, 5210, 779]],[new Date('26 April 2020, 08:00 GMT+5:30'),[26496, 0, 5804, 824]],[new Date('26 April 2020, 17:00 GMT+5:30'),[26605+312, 0, 5914, 826]],[new Date('27 April 2020, 08:00 GMT+5:30'),[27892, 0, 6185, 872]],[new Date('27 April 2020, 17:00 GMT+5:30'),[28160+220, 0, 6362, 886]],[new Date('28 April 2020, 08:00 GMT+5:30'),[29435, 0, 6869, 934]],[new Date('28 April 2020, 17:00 GMT+5:30'),[29834+140, 0, 7027, 937]],[new Date('29 April 2020, 08:00 GMT+5:30'),[31332, 0, 7696, 1007]],[new Date('29 April 2020, 17:00 GMT+5:30'),[31709+78, 0, 7797, 1008]],[new Date('30 April 2020, 08:00 GMT+5:30'),[33050, 0, 8325, 1074]],[new Date('30 April 2020, 17:00 GMT+5:30'),[33330+280, 0, 8373, 1075]],[new Date('01 May 2020, 08:00 GMT+5:30'),[34752+291, 0, 8889, 1147]],[new Date('01 May 2020, 17:00 GMT+5:30'),[34972+393, 0, 9065, 1152]],[new Date('02 May 2020, 08:00 GMT+5:30'),[37157+179, 0, 9951, 1218]],[new Date('02 May 2020, 17:00 GMT+5:30'),[37671+105, 0, 10018, 1223]],[new Date('03 May 2020, 08:00 GMT+5:30'),[39856+124, 0, 10633, 1301]],[new Date('03 May 2020, 17:00 GMT+5:30'),[40124+139, 0, 10887, 1306]],[new Date('04 May 2020, 08:00 GMT+5:30'),[42533, 0, 11707, 1373]],[new Date('04 May 2020, 17:00  GMT+5:30'),[42836, 0, 11762, 1389]],[new Date('05 May 2020, 08:00  GMT+5:30'),[46433, 0, 12727, 1568]],[new Date('05 May 2020, 17:00  GMT+5:30'),[46711, 0, 13161, 1583]],[new Date('06 May 2020, 08:00  GMT+5:30'),[49390+1, 0, 14183, 1694]],[new Date('07 May 2020, 08:00  GMT+5:30'),[52952, 0, 15267, 1783]],[new Date('08 May 2020, 08:00  GMT+5:30'),[56342, 0, 16540, 1886]],[new Date('09 May 2020, 08:00  GMT+5:30'),[59662, 0, 17847, 1981]],[new Date('10 May 2020, 08:00  GMT+5:30'),[62939, 0, 19358, 2109]],[new Date('11 May 2020, 08:00  GMT+5:30'),[67152, 0, 20917, 2206]],[new Date('12 May 2020, 08:00  GMT+5:30'),[70756, 0, 22455, 2293]],[new Date('13 May 2020, 08:00  GMT+5:30'),[74281, 0, 24386, 2415]],[new Date('14 May 2020, 08:00  GMT+5:30'),[78003, 0, 26235, 2549]],[new Date('15 May 2020, 08:00  GMT+5:30'),[81970, 0, 27920, 2649]],[new Date('16 May 2020, 08:00  GMT+5:30'),[85710, 0, 30153, 2752]],[new Date('17 May 2020, 08:00  GMT+5:30'),[90637+290, 0, 34109, 2872]],[new Date('18 May 2020, 08:00  GMT+5:30'),[95759+410, 0, 36824, 3029]],[new Date('19 May 2020, 08:00  GMT+5:30'),[100325+814, 0, 39174, 3163]],[new Date('20 May 2020, 08:00  GMT+5:30'),[105654+1096, 0, 42298, 3303]],[new Date('21 May 2020, 08:00  GMT+5:30'),[110956+1403, 0, 45300, 3435]],[new Date('22 May 2020, 08:00  GMT+5:30'),[116827+1620, 0, 48534, 3583]],[new Date('23 May 2020, 08:00  GMT+5:30'),[123202+1899, 0, 51784, 3720]],[new Date('24 May 2020, 08:00  GMT+5:30'),[129530+2338, 0, 54441, 3867]],[new Date('25 May 2020, 08:00  GMT+5:30'),[136203+2642, 0, 57721, 4021]],[new Date('26 May 2020, 08:00  GMT+5:30'),[142410+2970, 0, 60491, 4167]],[new Date('27 May 2020, 08:00  GMT+5:30'),[147754+4013, 0, 64426, 4337]],[new Date('28 May 2020, 08:00  GMT+5:30'),[154001+4332, 0, 67692, 4531]],[new Date('29 May 2020, 08:00  GMT+5:30'),[161126+4673, 0, 71106, 4706]],[new Date('30 May 2020, 08:00  GMT+5:30'),[168720+5043, 0, 82370, 4971]],[new Date('31 May 2020, 08:00  GMT+5:30'),[176652+5491, 0, 86984, 5164]],[new Date('01 June 2020, 08:00  GMT+5:30'),[184905+5630, 0, 91819, 5394]],[new Date('02 June 2020, 08:00  GMT+5:30'),[192292+6414, 0, 95527, 5598]],[new Date('03 June 2020, 08:00  GMT+5:30'),[200492+7123, 0, 100303, 5815]],[new Date('04 June 2020, 08:00  GMT+5:30'),[209436+7483, 0, 104107, 6075]],[new Date('05 June 2020, 08:00  GMT+5:30'),[219160+7610, 0, 109462, 6348]],[new Date('06 June 2020, 08:00  GMT+5:30'),[228465+7730, 0, 114073, 6642]],[new Date('07 June 2020, 08:00  GMT+5:30'),[238023+8605, 0, 119293, 6929]],[new Date('08 June 2020, 08:00 GMT+5:30'),[248774+7837, 0, 124430, 7200]],[new Date('09 June 2020, 08:00  GMT+5:30'),[257795+8803, 0, 129215, 7466]],[new Date('10 June 2020, 08:00  GMT+5:30'),[267356+9227, 0, 135206, 7745]],[new Date('11 June 2020, 08:00  GMT+5:30'),[277648+8931, 0, 141029, 8102]],[new Date('12 June 2020, 08:00  GMT+5:30'),[141842+147194+8498+1, 0, 147194+1, 8498]],[new Date('13 June 2020, 08:00  GMT+5:30'),[301009+7984, 0, 154330, 8884]],[new Date('14 June 2020, 08:00  GMT+5:30'),[313486+7436, 0, 162379, 9195]],[new Date('15 June 2020, 08:00  GMT+5:30'),[325452+6972, 0, 169798, 9520]],[new Date('16 June 2020, 08:00  GMT+5:30'),[335407+7684, 0, 180013, 9900]],[new Date('17 June 2020, 08:00  GMT+5:30'),[345792+8273, 0, 186935, 11903]],[new Date('18 June 2020, 08:00  GMT+5:30'),[358243+8703, 0, 194325, 12237]],[new Date('19 June 2020, 08:00  GMT+5:30'),[371605+8927, 0, 204711, 12573]],[new Date('20 June 2020, 08:00  GMT+5:30'),[385783+9265, 0, 213831, 12948]],[new Date('21 June 2020, 08:00  GMT+5:30'),[401334+9127, 0, 227756, 13254]],[new Date('22 June 2020, 08:00  GMT+5:30'),[417450+7832, 0, 237196, 13699]],[new Date('23 June 2020, 08:00  GMT+5:30'),[432200+8015, 0, 248190, 14011]],[new Date('24	June 2020, 08:00  GMT+5:30'),[448042+8141, 0, 258685, 14476]],[new Date('25	June 2020, 08:00  GMT+5:30'),[464612+8493, 0, 271697, 14894]],[new Date('26	June 2020, 08:00  GMT+5:30'),[482278+8123, 0, 285637, 15301]],[new Date('27	June 2020, 08:00  GMT+5:30'),[500930+8023, 0, 295881, 15685]],[new Date('28	June 2020, 08:00  GMT+5:30'),[521020+7839, 0, 309713, 16095]],[new Date('29	June 2020, 08:00  GMT+5:30'),[541033+7285, 0, 321723, 16475]],[new Date('30	June 2020, 08:00  GMT+5:30'),[559836+7004, 0, 334822, 16893]],[new Date('01	July 2020, 08:00  GMT+5:30'),[578578+6915, 0, 347979, 17400]],[new Date('02	July 2020, 08:00  GMT+5:30'),[597809+6832, 0, 359860, 17834]],[new Date('03	July 2020, 08:00  GMT+5:30'),[619513+6031, 0, 379892, 18213]],[new Date('04	July 2020, 08:00  GMT+5:30'),[643316+4999, 0, 394227, 18655]],[new Date('05	July 2020, 08:00  GMT+5:30'),[668536+4629, 0, 409083, 19268]],[new Date('06	July 2020, 08:00  GMT+5:30'),[692500+4913, 0, 424433, 19693]],[new Date('07	July 2020, 08:00  GMT+5:30'),[714631+5034, 0, 439948, 20160]],[new Date('08	July 2020, 08:00  GMT+5:30'),[737399+5018, 0, 456831, 20642]],[new Date('09	July 2020, 08:00  GMT+5:30'),[762911+4385, 0, 476378, 21129]],[new Date('10	July 2020, 08:00  GMT+5:30'),[789641+4161, 0, 495516, 21604]],[new Date('11	July 2020, 08:00  GMT+5:30'),[817500+3416, 0, 515386, 22123]],[new Date('12	July 2020, 08:00  GMT+5:30'),[846529+3024, 0, 534621, 22674]],[new Date('13	July 2020, 08:00  GMT+5:30'),[875896+2358, 0, 553471, 23174]],[new Date('14	July 2020, 08:00  GMT+5:30'),[904573+2179, 0, 571460, 23727]],[new Date('15	July 2020, 08:00  GMT+5:30'),[934657+1524, 0, 592032, 24309]],[new Date('16	July 2020, 08:00  GMT+5:30'),[967591+1285, 0, 612815, 24915]],[new Date('17	July 2020, 08:00  GMT+5:30'),[1003301+531, 0, 635757, 25602]],[new Date('18	July 2020, 08:00  GMT+5:30'),[1038553+163, 0, 653751, 26273]],[new Date('19	July 2020, 08:00  GMT+5:30'),[1077618, 0, 677423, 26816]]];