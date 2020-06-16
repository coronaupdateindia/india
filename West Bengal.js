var rawData=[[new Date(2020,02,15,12,0),[ 0, 0,0,0]],[new Date(2020,02,15,17,0),[ 0, 0,0,0]],[new Date(2020,02,15,23,30),[ 0, 0,0,0]],[new Date(2020,02,16,16,0),[ 0, 0,0,0]],[new Date(2020,02,17,9,15),[ 0, 0,0,0]],[new Date(2020,02,17,17,15),[ 0, 0,0,0]],[new Date(2020,02,24,20,15),[9, 0, 0, 1]],[new Date(2020,02,25,9,15),[9, 0, 0, 1]],[new Date(2020,02,25,18,45),[9, 0, 0, 1]],[new Date(2020,02,26,10,15),[9, 0, 0, 1]],[new Date(2020,02,26,20,00),[10, 0, 0, 1]],[new Date(2020,02,27,9,15),[10, 0, 0, 1]],[new Date(2020,02,28,9,30),[15, 0, 0, 1]],[new Date(2020,02,28,17,45),[15, 0, 0, 1]],[new Date(2020,02,29,10,00),[17, 0, 0, 1]],[new Date(2020,02,29,19,30),[18, 0, 0, 1]],[new Date(2020,02,30,10,30),[19, 0, 0, 1]],[new Date(2020,02,30,21,30),[22, 0, 0, 1]],[new Date(2020,02,31,20,30),[26, 0, 0, 2]],[new Date('01 April 2020, 09:00 GMT+5:30'),[26, 0, 0, 2]],[new Date('01 April 2020, 19:30 GMT+5:30'),[37, 0, 6, 3]],[new Date('02 April 2020, 09:00 GMT+5:30'),[37, 0, 6, 3]],[new Date('02 April 2020, 18:00 GMT+5:30'),[53, 0, 6, 3]],[new Date('03 April 2020, 09:00 GMT+5:30'),[53, 0, 3, 3]],[new Date('03 April 2020, 18:00 GMT+5:30'),[63, 0, 3, 3]],[new Date('04 April 2020, 09:00 GMT+5:30'),[63, 0, 3, 3]],[new Date('04 April 2020, 18:00 GMT+5:30'),[69, 0, 3, 3]],[new Date('05 April 2020, 09:00 GMT+5:30'),[69, 0, 10, 3]],[new Date('05 April 2020, 18:00 GMT+5:30'),[80, 0, 10, 3]],[new Date('06 April 2020, 09:00 GMT+5:30'),[80, 0, 10, 3]],[new Date('06 April 2020, 18:00 GMT+5:30'),[80, 0, 10, 3]],[new Date('07 April 2020, 09:00 GMT+5:30'),[91, 0, 13, 3]],[new Date('07 April 2020, 18:00 GMT+5:30'),[91, 0, 13, 3]],[new Date('08 April 2020, 08:00 GMT+5:30'),[99, 0, 13, 5]],[new Date('08 April 2020, 17:00 GMT+5:30'),[99, 0, 13, 5]],[new Date('09 April 2020, 08:00 GMT+5:30'),[103, 0, 16, 5]],[new Date('09 April 2020, 17:00 GMT+5:30'),[103, 0, 16, 5]],[new Date('10 April 2020, 08:00 GMT+5:30'),[116, 0, 16, 5]],[new Date('10 April 2020, 17:00 GMT+5:30'),[116, 0, 16, 5]],[new Date('11 April 2020, 08:00 GMT+5:30'),[116, 0, 16, 5]],[new Date('11 April 2020, 17:00 GMT+5:30'),[126, 0, 16, 5]],[new Date('12 April 2020, 08:00 GMT+5:30'),[134, 0, 19, 5]],[new Date('12 April 2020, 17:00 GMT+5:30'),[134, 0, 19, 5]],[new Date('13 April 2020, 08:00 GMT+5:30'),[152, 0, 29, 7]],[new Date('13 April 2020, 17:00 GMT+5:30'),[152, 0, 29, 7]],[new Date('14 April 2020, 08:00 GMT+5:30'),[190, 0, 36, 7]],[new Date('14 April 2020, 17:00 GMT+5:30'),[190, 0, 36, 7]],[new Date('15 April 2020, 08:00 GMT+5:30'),[213, 0, 37, 7]],[new Date('15 April 2020, 17:00 GMT+5:30'),[213, 0, 37, 7]],[new Date('16 April 2020, 08:00 GMT+5:30'),[231, 0, 42, 7]],[new Date('16 April 2020, 17:00 GMT+5:30'),[231, 0, 42, 7]],[new Date('17 April 2020, 08:00 GMT+5:30'),[255, 0, 51, 10]],[new Date('17 April 2020, 17:00 GMT+5:30'),[255, 0, 51, 10]],[new Date('18 April 2020, 08:00 GMT+5:30'),[287, 0, 55, 10]],[new Date('18 April 2020, 17:00 GMT+5:30'),[287, 0, 55, 10]],[new Date('19 April 2020, 08:00 GMT+5:30'),[310, 0, 62, 12]],[new Date('19 April 2020, 17:00 GMT+5:30'),[310, 0, 62, 12]],[new Date('20 April 2020, 08:00 GMT+5:30'),[339, 0, 66, 12]],[new Date('20 April 2020, 17:00 GMT+5:30'),[339, 0, 66, 12]],[new Date('21 April 2020, 08:00 GMT+5:30'),[392, 0, 73, 12]],[new Date('21 April 2020, 17:00 GMT+5:30'),[392, 0, 73, 12]],[new Date('22 April 2020, 08:00 GMT+5:30'),[423, 0, 73, 15]],[new Date('22 April 2020, 17:00 GMT+5:30'),[423, 0, 73, 15]],[new Date('23 April 2020, 08:00 GMT+5:30'),[456, 0, 79, 15]],[new Date('23 April 2020, 17:00 GMT+5:30'),[456, 0, 79, 15]],[new Date('24 April 2020, 08:00 GMT+5:30'),[514, 0, 103, 15]],[new Date('24 April 2020, 17:00 GMT+5:30'),[514, 0, 103, 15]],[new Date('25 April 2020, 08:00 GMT+5:30'),[571, 0, 103, 18]],[new Date('25 April 2020, 17:00 GMT+5:30'),[571, 0, 103, 18]],[new Date('26 April 2020, 08:00 GMT+5:30'),[611, 0, 105, 18]],[new Date('26 April 2020, 17:00 GMT+5:30'),[611, 0, 105, 18]],[new Date('27 April 2020, 08:00 GMT+5:30'),[649, 0, 105, 20]],[new Date('27 April 2020, 17:00 GMT+5:30'),[649, 0, 105, 20]],[new Date('28 April 2020, 08:00 GMT+5:30'),[697, 0, 109, 20]],[new Date('28 April 2020, 17:00 GMT+5:30'),[697, 0, 109, 20]],[new Date('29 April 2020, 08:00 GMT+5:30'),[725, 0, 119, 22]],[new Date('29 April 2020, 17:00 GMT+5:30'),[725, 0, 119, 22]],[new Date('30 April 2020, 08:00 GMT+5:30'),[758, 0, 124, 22]],[new Date('30 April 2020, 17:00 GMT+5:30'),[758, 0, 124, 22]],[new Date('01 May 2020, 08:00 GMT+5:30'),[795, 0, 139, 33]],[new Date('01 May 2020, 17:00 GMT+5:30'),[795, 0, 139, 33]],[new Date('02 May 2020, 08:00 GMT+5:30'),[795, 0, 139, 33]],[new Date('02 May 2020, 17:00 GMT+5:30'),[795, 0, 139, 33]],[new Date('03 May 2020, 08:00 GMT+5:30'),[922, 0, 151, 33]],[new Date('03 May 2020, 17:00 GMT+5:30'),[922, 0, 151, 33]],[new Date('04 May 2020, 08:00 GMT+5:30'),[963, 0, 151, 35]],[new Date('04 May 2020, 17:00  GMT+5:30'),[963, 0, 151, 35]],[new Date('05 May 2020, 08:00  GMT+5:30'),[1259, 0, 218, 133]],[new Date('05 May 2020, 17:00  GMT+5:30'),[1259, 0, 218, 133]],[new Date('06 May 2020, 08:00  GMT+5:30'),[1344, 0, 364, 140]],[new Date('07 May 2020, 08:00  GMT+5:30'),[1456, 0, 364, 144]],[new Date('08 May 2020, 08:00  GMT+5:30'),[1548, 0, 364, 151]],[new Date('09 May 2020, 08:00  GMT+5:30'),[1678, 0, 364, 160]],[new Date('10 May 2020, 08:00  GMT+5:30'),[1786, 0, 372, 171]],[new Date('11 May 2020, 08:00  GMT+5:30'),[1939, 0, 417, 185]],[new Date('12 May 2020, 08:00  GMT+5:30'),[2063, 0, 499, 190]],[new Date('13 May 2020, 08:00  GMT+5:30'),[2173, 0, 612, 198]],[new Date('14 May 2020, 08:00  GMT+5:30'),[2290, 0, 702, 207]],[new Date('15 May 2020, 08:00  GMT+5:30'),[2377, 0, 768, 215]],[new Date('16 May 2020, 08:00  GMT+5:30'),[2461, 0, 829, 225]],[new Date('17 May 2020, 08:00  GMT+5:30'),[2576, 0, 872, 232]],[new Date('18 May 2020, 08:00  GMT+5:30'),[2677, 0, 959, 238]],[new Date('19 May 2020, 08:00  GMT+5:30'),[2825, 0, 1006, 244]],[new Date('20 May 2020, 08:00  GMT+5:30'),[2961, 0, 1074, 250]],[new Date('21 May 2020, 08:00  GMT+5:30'),[3103, 0, 1136, 253]],[new Date('22 May 2020, 08:00  GMT+5:30'),[3197, 0, 1193, 259]],[new Date('23 May 2020, 08:00  GMT+5:30'),[3332, 0, 1221, 265]],[new Date('24 May 2020, 08:00  GMT+5:30'),[3459, 0, 1281, 269]],[new Date('25 May 2020, 08:00  GMT+5:30'),[3667, 0, 1339, 272]],[new Date('26 May 2020, 08:00  GMT+5:30'),[3816, 0, 1414, 278]],[new Date('27 May 2020, 08:00  GMT+5:30'),[4009, 0, 1486, 283]],[new Date('28 May 2020, 08:00  GMT+5:30'),[4192, 0, 1578, 289]],[new Date('29 May 2020, 08:00  GMT+5:30'),[4536, 0, 1668, 295]],[new Date('30 May 2020, 08:00  GMT+5:30'),[4813, 0, 1775, 302]],[new Date('31 May 2020, 08:00  GMT+5:30'),[5130, 0, 1970, 309]],[new Date('01 June 2020, 08:00  GMT+5:30'),[5501, 0, 2157, 317]],[new Date('02 June 2020, 08:00  GMT+5:30'),[5772, 0, 2306, 325]],[new Date('03 June 2020, 08:00  GMT+5:30'),[6168, 0, 2410, 335]],[new Date('04 June 2020, 08:00  GMT+5:30'),[6508, 0, 2580, 345]],[new Date('05 June 2020, 08:00  GMT+5:30'),[6876, 0, 2768, 355]],[new Date('06 June 2020, 08:00  GMT+5:30'),[7303, 0, 2912, 366]],[new Date('07 June 2020, 08:00  GMT+5:30'),[7738, 0, 3119, 383]],[new Date('08 June 2020, 08:00 GMT+5:30'),[8187, 0, 3303, 396]],[new Date('09 June 2020, 08:00  GMT+5:30'),[8613, 0, 3465, 405]],[new Date('10 June 2020, 08:00  GMT+5:30'),[8985, 0, 3620, 415]],[new Date('11 June 2020, 08:00  GMT+5:30'),[9328, 0, 3779, 432]],[new Date('12 June 2020, 08:00  GMT+5:30'),[9768, 0, 3988, 442]],[new Date('13 June 2020, 08:00  GMT+5:30'),[10244, 0, 4206, 451]],[new Date('14 June 2020, 08:00  GMT+5:30'),[10698, 0, 4542, 463]],[new Date('15 June 2020, 08:00  GMT+5:30'),[11087, 0, 5060, 475]],[new Date('16 June 2020, 08:00  GMT+5:30'),[11494, 0, 5494, 485]]];