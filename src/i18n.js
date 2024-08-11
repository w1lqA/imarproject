import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ru',
    lng: 'ru',
    returnObjects: true,
    resources: {
      en: {
        translation: {
          headerButton: 'About Us',
          navbar: {
            main: 'Home',
            projects: 'Projects',
            services: 'Services',
            career: 'Career'
          },
          activitiesSectionTitle: 'Fields of Activity',
          activities: [
            'Civil Construction',
            'Industrial Construction',
            'Mining Construction',
            'Oil and Gas Construction'
          ],
          about: {
            title: 'ABOUT US',
            listElements: [
              {
                description: 'Outsourcing PTO: managing and forming documentation sets'
              },
              {
                description: 'Providing PTO engineers at the construction site'
              },
              {
                description: 'Consultation and technical support in document package formation'
              }
            ],
            paragraph: 'Documentation support for the investment and construction project implementation process at all stages of its life cycle using our own digital service IMARPRO®',
            consultation: 'Leave a request, and we will contact you',
            contactFormButton: 'Submit Request'
          },
          documentsSectionTitle: 'EXECUTIVE DOCUMENTATION PREPARATION',
          documentsList: [
            'Preparation of all types of documentation in accordance with state norms and standards',
            'Preparation of executive documentation (ID)',
            'Development of Work Production Project (PPR)',
            'Development of Construction Organization Project (POS)',
            'Development of technological and technical maps (TK and TTK)',
            'Development of Dismantling Organization Project (POD)',
            'Development of Crane Work Production Project (PPRk)',
            'Development of Work at Height Plan (PPRv)'
          ],
          servicesSectionTitle: 'ENGINEERING SYSTEMS DESIGN',
          services: [
            {
              title: 'ELECTRICAL POWER SYSTEMS'
            },
            {
              title: 'LOW-CURRENT SYSTEMS'
            },
            {
              title: 'MECHANICAL ENGINEERING SYSTEMS'
            }
          ],
          hero: {
            description: "We are an international construction and engineering company, supporting our clients at all stages of their lifecycle in the implementation of infrastructure, industrial, and development projects.",
            button: "ABOUT US"
          },
          projects: {
            project1: "RESIDENTIAL COMPLEX",
            project2: "AMUR GPP",
            project3: "RESIDENTIAL DISTRICT",
            project4: "AMUR GHK",
            project5: "KUZMINKI MALL",
            project6: "G-DRIVE ARENA",
            project7: "Industrial Park",
            project8: "Magadan Airport",
            description1: "Electrical and mechanical works",
            description2: "Construction and installation works",
            projectCardButton: "Learn More"
          },
          projectsSectionTitle: "OUR PROJECTS",
          geographyTitle: "GEOGRAPHY OF PROJECTS",
          career: {
            title: "We are always looking for ambitious people",
            description: "If you want to join the IMAR team, please leave a request, and we will contact you.",
            button: "Learn More"
          },
          contacts: {
            title1: 'Contact Us',
            title2: 'Career at IMAR',
            location: '109004, Moscow, Zemlyanoy Val St., 64, bld. 2, office 1/7',
            phone: '+7 (991) 773-48-28',
            email: 'info@imar-group.com'
          },
          contactForm: {
            errorMessages: {
              0: ' ',
              1: 'Fill in all fields to continue',
              2: 'Accept the user agreement to continue',
              3: 'Your message has been successfully sent!',
              4: 'Something went wrong :('
            },
            agreement: 'I accept the user agreement and privacy policy',
            labelName: 'Name',
            labelEmail: 'Email',
            labelPhone: 'Phone',
            button: 'Send'
          },
          footer: {
            phone: 'Phone',
            email: 'Email',
            copyright: 'All rights reserved'
          },
          projectInfoSection: { title: 'ABOUT THE PROJECT' },
          projectPage: {
            header: {
              title: [
                'Start / End: ',
                'Type of Work: ',
                'Customer: '
              ]
            },
            projectInfo: [
              {
                title: ['SYMBOL RC'],
                headerInfo: ['2022-2023', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'MULTIFUNCTIONAL RESIDENTIAL COMPLEX WITH UNDERGROUND PARKING, RC “SYMBOL”, BUILDINGS 16-17-18 in MOSCOW',
                  'Three buildings are connected by a two-story stylobate and a single two-level underground parking for 449 cars. The total area of the project is 93,729 square meters.',
                  'The courtyard territory of the buildings is fenced and equipped with vehicle access control through the checkpoint. On the territory of the complex, it is planned to place: an attached supermarket; an integrated fitness and wellness complex (FWC); catering enterprises for up to 50 seats each; office premises.'
                ]
              },
              {
                title: ['AMUR GPP'],
                headerInfo: ['2018-2022', 'Electrical and mechanical works', 'YAMATA'],
                description: [
                  'The main construction site of the plant is about 900 hectares (comparable to the area of 1100 football fields). During the construction, more than 430 thousand cubic meters of concrete were poured, and over 170 thousand tons of metal structures were installed (comparable to the weight of 23 Eiffel Towers).',
                  'The design processing capacity is 42 billion cubic meters of natural gas per year. For the construction of the Amur GPP, large-scale infrastructure was created on the adjacent territories: 27 km of access roads, a berth on the Zeya River, about 40 km of railways.',
                  'The construction of the Amur gas processing plant in the Svobodny area of the Amur region has been ongoing since October 2015 as part of Gazprom’s Eastern Gas Program.'
                ]
              },
              {
                title: ['MICRODISTRICT', 'SVOBODNY CITY'],
                headerInfo: ['2020-2021', 'Construction and installation works', 'GORIZONT'],
                description: [
                  'Residential microdistrict for Amur GPP employees. For the operational staff of the Amur GPP in Svobodny, the “Alekseevsky” residential microdistrict for 5 thousand residents was built. A total of 42 five-story buildings with 1540 apartments and 36 townhouses with 148 apartments were constructed. All housing has improved layouts, high ceilings, furniture, household appliances, mirrors, and chandeliers. The courtyard area is equipped with parking lots and sports and playground complexes.',
                  'Also, the microdistrict will include a kindergarten with an indoor pool for 350 children, a school for 900 students, a clinic with adult and children’s departments, a cultural and leisure center, a universal store, a household service center, and a universal sports training complex.',
                  'For the water supply of the microdistrict, artesian wells were drilled. A water purification complex and modern treatment facilities for household sewage are provided. Heat and hot water are supplied by a gas boiler house. All facilities are designed for the Far Eastern climate with temperature fluctuations from minus 40 to plus 40 degrees.'
                ]
              },
              {
                title: ['Amur GHK'],
                headerInfo: ['2024 - present', 'Electrical and mechanical works', 'ESTA Construction'],
                description: [
                  'Amur Gas Chemical Complex (AGHK) is a joint venture between SIBUR and China Petroleum & Chemical Corporation (Sinopec) for the production of polyethylene and polypropylene of popular grades on the Russian and world markets. The complex’s production capacity will be up to 2.7 million tons of finished products per year.',
                  'The construction area of the Amur GHK is over 300 hectares. The complex is being built in the Svobodny district, 15 km from Svobodny city.',
                  "The world's largest pyrolysis units by individual capacity – 2.3 million tons per year – have been built, with 9 pyrolysis furnaces, 8 main and 1 reserve."
                ]
              },
              {
                title: ['MALL', 'KUZMINKI MALL'],
                headerInfo: ['2023-2024', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'Project for the construction of a new shopping and entertainment center “Kuzminki Mall” in Moscow. Kuzminki Mall is located 200 meters from the Kuzminki metro station on one of the main transport arteries of the city.',
                  'The shopping and entertainment center has become a central shopping destination. The mall includes a supermarket, popular fashion and sports brands, as well as a gastronomic space with cafes and restaurants. In front of the main entrance to the mall, there is a landscaped square with atmospheric lighting, and inside – spacious atriums with wide lounge areas.'
                ]
              },
              {
                title: ['G-Drive Arena'],
                headerInfo: ['2021-2022', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'The multifunctional sports complex “G-DRIVE Arena” is designed for: KHL, VHL, and WJC hockey matches; hockey training processes; mass ice skating; other sports and entertainment events.',
                  'During free time from sports events, the area around the sports complex is used for walks and recreation for citizens, as well as for holding city-wide cultural and mass events.'
                ]
              },
              {
                title: ['Industrial Park “Chernyakhovsk”'],
                headerInfo: ['2021-2022', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'Construction of a production complex for the production of silicon wafers and photovoltaic converters, located in Chernyakhovsk, Kaliningrad region (Industrial Park “Chernyakhovsk”). This is the largest solar wafer and cell factory in Eastern Europe.',
                  'During the project implementation, the design documentation was adjusted with state expertise, working documentation was developed in BIM, and construction works were carried out “turnkey”, including the full scope of electromechanical works.'
                ]
              },
              {
                title: ['Magadan Airport'],
                headerInfo: ['2024 - present', 'Electrical and mechanical works', 'LIMAKMARASH'],
                description: [
                  'As part of the project, the construction of a new terminal complex for domestic flights of the Magadan International Airport is underway.',
                  'The construction of a new station square, a new 10kV distribution substation, treatment facilities, and other auxiliary facilities.',
                  'The new terminal of Magadan International Airport will be equipped with 2 telescopic gangways and an automated baggage handling system, and will implement modern passenger service technologies.'
                ]
              }
            ]
          },
          servicePage: [
            {
              title: 'ELECTRICAL POWER SYSTEMS',
              description: [
                '➤ ES: Electrical Supply',
                '➤ EM: Electrical Equipment',
                '➤ EG: Lightning Protection and Grounding',
                '➤ AMR: Automated Meter Reading'
              ]
            },
            {
              title: 'LOW-CURRENT SYSTEMS',
              description: [
                "APS Automatic Fire Alarm System",
                "Smoke protection automation system",
                "SUE System of warning and control of evacuation of people in case of fire",
                "ACS Access Control and Management System",
                "CCTV Video Surveillance System",
                "SCS Structured Cabling System",
                "SRF Radio System",
                "SPP Automatic Parking System (paid parking system)",
                "OS Security alarm system",
                "TS Alarm system",
                "ECH Electrical Chasification System",
                "SES Emergency communication system for immobile groups of population",
              ]
            },
            {
              title: 'MECHANICAL ENGINEERING SYSTEMS',
              description: [
                "OV Heating Ventilation and Air Conditioning",
                "OV1 Heating and Heat Supply System",
                "OV2 System of general-exchange ventilation",
                "OV3 Air-conditioning system",
                "ОВ4 Smoke ventilation system",
                "VK Sewerage",
                "BK1 Internal sewerage systems",
                "BK2 Storm water drainage",
                "BK3 Industrial sewerage",
                "WS Water Supply System",
                "CC Refrigeration system",
                "AUPT Automatic water fire extinguishing system",
                "VPV Internal fire-fighting water supply system",
              ],
            },
          ],
        },
      },
      ru: {
        translation: {
            headerButton: 'о нас',
            navbar: {
              main: 'Главная', 
              projects: 'Проекты',
              services: 'Услуги',
              career: 'Карьера'
            },
            activitiesSectionTitle: 'сферы деятельности',
            activities: [
                    'Гражданское строительство',
                    'Промышленное строительство',
                    'Горнообогатительное строительство',
                    'Нефтегазовое строительство',
            ],
            about: {
                title: 'О НАС',
                listElements: [
                    {
                        description: 'Аутсорсинг ПТО: ведение и формирование комплекта документации',
                    },
                    {
                        description: 'Предоставление инженеров ПТО на объект строительства',
                    },
                    {
                        description: 'Консультационная и техническая поддержка при формировании пакета документов',
                    },
                ],
                paragraph: 'Документационное сопровождение процесса реализации инвестиционно-строительного проекта на всех стадиях его жизненного цикла с помощью собственного цифрового сервиса IMARPRO®',
                consultation: 'Оставьте заявку, и мы свяжемся с вами',
                contactFormButton: 'оставить заявку',
            },
            documentsSectionTitle: 'ПОДГОТОВКА ИСПОЛНИТЕЛЬНОЙ ДОКУМЕНТАЦИИ',
            documentsList: [
              'Подготовка всех видов документаций в соответствии с гос.нормами и стандартами',
              'Подготовка ИД исполнительной документации',
              'Разработка ППР проекта производства работ',
              'Разработка ПОС проект организации строительства',
              'Разработка ТК и ТТК технологические и технико-технологические карты ',
              'Разработка ПОД проект организации демонтажа ',
              'Разработка ППРк проект производства работ кранами',
              'Разработка ППРв план производства работ на высоте',
            ],
            servicesSectionTitle: 'ПРОЕКТИРОВАНИЕ ИНЖЕНЕРНЫХ СИСТЕМ',
            services: [
              {
                title: 'ЭЛЕКТРИЧЕСКИЕ СИЛОВЫЕ СИСТЕМЫ',

              },
              {
                title: 'СЛАБОТОЧНЫЕ СИСТЕМЫ',

              },
              {
                title: 'МЕХАНИЧЕСКИЕ ИНЖЕНЕРНЫЕ СИСТЕМЫ',

              },
            ],
            hero: {
              description: "Мы - международная строительная и инженерная компания, сопровождаем наших клиентов на всех этапах их жизненного цикла при реализации инфраструктурных, промышленных и развития проектов.",
              button: "О НАС"
            },
            projects: {
              project1: "ЖИЛОЙ КОМПЛЕКС",
              project2: "АМУРСКИЙ ГПЗ",
              project3: "ЖИЛОЙ МИКРОРАЙОН",
              project4: "АМУРСКИЙ ГХК",
              project5: "КУЗЬМИНКИ МОЛЛ",
              project6: "АРЕНА G-DRIVE",
              project7: "Индустриальный парк",
              project8: "Аэропорт «Магадан»",
              description1: "Электромонтажные и механические работы",
              description2: "Строительно-монтажные работы",
              projectCardButton: "Подробнее"
            },
            projectsSectionTitle: "НАШИ ПРОЕКТЫ",
            geographyTitle: "ГЕОГРАФИЯ ПРОЕКТОВ",
            career: {
              title: "Мы всегда в поисках амбициозных людей",
              description: "Если вы хотите присоединиться к команде IMAR, пожалуйста, оставьте заявку, и мы свяжемся с вами.",
              button: "Узнать больше"
            },
            contacts: {
              title1: 'Свяжитесь с нами',
              title2: 'Карьера в IMAR',
              location: '109004, Москва, ул. Земляной Вал, д. 64, стр. 2, ком. 1/7',
              phone: '+7 (991) 773-48-28',
              email: 'info@imar-group.com',
            },
            contactForm: {
              errorMessages: {
                0: ' ',
                1: 'Заполните все поля, чтобы продолжить',
                2: 'Примите пользовательское соглашение, чтобы продолжить',
                3: 'Ваше сообщение успешно отправлено!',
                4: 'Что-то пошло не так :('
              },
              agreement: 'Я принимаю пользовательское соглашение и политику конфиденциальности',
              labelName: 'Имя',
              labelEmail: 'Email',
              labelPhone: 'Телефон',
              button: 'Отправить',
            },
            footer: {
              phone: 'Телефон',
              email: 'Email',
              copyright: 'Все права защищены'
            },
            projectInfoSection: {title: 'О ПРОЕКТЕ'},
            projectPage: {
              header: {title: [
                'Начало / Конец: ',
                'Тип работ: ',
                'Заказчик: '
              ]},
              projectInfo:[
                {
                  title: ['ЖК СИМВОЛ'],
                  headerInfo: ['2022-2023','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'МНОГОФУНКЦИОНАЛЬНАЯ КОМПЛЕКСНАЯ ЖИЛАЯ ЗАСТРОЙКА С ПОДЗЕМНОЙ АВТОСТОЯНКОЙ, ЖК «СИМВОЛ», КОРПУСА 16-17-18 в г.МОСКВА',
                    'Три корпуса объединены двухэтажным стилобатом и единым двухуровневым подземным паркингом на 449 машиномест. Общая площадь проекта составляет 93 729 квадратных метров.',
                    'Территория внутреннего двора домов огорожена и оборудована контролем доступа автотранспорта через КПП.На территории застройки, в жилом комплексе, предполагается разме- стить:пристроенный супермаркет;встроенно-пристроенный физкультурно-оздоровительный комплекс (ФОК);предприятия общественного питания до 50 посадочных мест каждое;офисные помещения.',
                  ],
                },
                {
                  title: ['АМУРСКИЙ ГПЗ'],
                  headerInfo: ['2018-2022','Электрические и механические работы','YAMATA'],
                  description: [
                    'Размер основной строительной площадки завода — порядка 900 га (сравнимо с площадью 1100 футбольных полей). В ходе строительства залито более 430 тыс. куб. м бетона, смонтировано более 170 тыс. тонн металлоконструкций (сопоставимо с весом 23 Эйфелевых башен).',
                    'Проектная мощность переработки — 42 млрд куб. м природного газа в год. Для строительства Амурского ГПЗ на прилегающих территориях создана масштабная инфраструктура: 27 км подъездных автодорог, причал на р. Зее, порядка 40 км железнодорожных путей.',
                    'Строительство Амурского газоперерабатывающего завода в районе г. Свободного Амурской области ведется с октября 2015 года в рамках реализации Восточной газовой программы «Газпрома»',
                  ],
                },
                {
                  title: ['МИКРОРАЙОН','г.СВОБОДНЫЙ'],
                  headerInfo: ['2020-2021','Строительные и монтажные работы','GORIZONT'],
                  description: [
                    'Жилой микрорайон для сотрудников Амурского ГПЗ.Для эксплуатационного персонала Амурского ГПЗ в г. Свободном построен жилой микрорайон «Алексеевский» на 5 тыс. жителей. Всего возведено 42 пятиэтажных дома на 1540 квартир и 36 таунхаусов на 148 квартир. Всё жилье улучшенной планировки, с высокими потолками, мебелью, бытовой техникой, зеркалами и люстрами. Придомовая территория оснащена автопарковками и спортивно-игровыми комплексами.',
                    'Также на территории микрорайона разместятся детский сад с крытым бассейном на 350 мест, школа на 900 учащихся, поликлиника со взрослым и детским отделениями, Центр культуры и досуга, универсальный магазин, центр бытового обслуживания, универсальный спортивно-тренировочный комплекс. ',
                    'Для водоснабжения микрорайона пробурены артезианские скважины. Предусмотрены комплекс очистки воды и современные очистные сооружения хозяйственно-бытовых стоков. Тепло и горячую воду поставляет собственная газовая котельная. Все объекты рассчитаны на дальневосточный климат с перепадом температур от минус 40, до плюс 40 градусов.',
                  ],
                },
                {
                  title: ['Амурский ГХК'],
                  headerInfo: ['2024 - настоящее время','Электромонтажные и механические работы','ESTA Construction'],
                  description: [
                    'Амурский газохимический комплекс (АГХК) - совместное предприятие СИБУРа и China Petroleum & Chemical Corporation (Sinopec) по производству полиэтилена и полипропилена востребованных на российском и мировом рынках марок. Производственная мощность комплекса составит до 2,7 миллионов тонн готовой продукции в год.',
                    'Площадь объектов строительства Амурского ГХК - более 300 гектаров. Комплекс возводится на территории Свободненского района, в 15 км отг. Свободный.',
                    'Крупнейшие в мире установки пиролиза по единичной мощности - 2,3 млн тонн в год, построены 9 печей пиролиза, 8 основных и 1 резервная.',
                  ],
                },
                {
                  title: ['ТРЦ', 'КУЗЬМИНКИ МОЛЛ'],
                  headerInfo: ['2023-2024','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'Проект строительства нового торгово-развлекательного центра «Кузьминки Молл» в г.Москве. Кузьминки Молл - расположен в 200 метрах от станции метро «Кузьминки» на одной из основных транспортных артерий города. ',
                    'Торгово-развлекательный центр стал центральным местом шоппинга.ТЦ включает супермаркет, популярные fashion и спортивные бренды, а также гастрономическое пространство с кафе и ресторанами. Перед главным входом в молл расположен благоустроенный сквер с атмосферной подсветкой, внутри - просторные атриумы с просторными лаунж зонами.',
                  ],
                },
                {
                  title: ['Арена G-Drive'],
                  headerInfo: ['2021-2022','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'Многофункциональный спортивный комплекс «G-DRIVE Arena» предназначена для: Хоккейных матчей под эгидой КХЛ, ВХЛ, МЧМ; Учебно-тренировочного процесса по хоккею; Массового катания на коньках; Иных спортивно-зрелищных мероприятий',
                    'В свободное от спортивных мероприятий время территория вокруг спортивного комплекса используется для прогулок и отдыха горожан, а также для проведения общегородских культурно-массовых мероприятий.',
                  ],
                },
                {
                  title: ['Индустриальный парк «Черняховск»'],
                  headerInfo: ['2021-2022','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'Строительство производственного комплекса по выпуску кремниевых пластин и фотоэлектрических преобразователей, расположенного в г. Черняховск Калининградской области (Индустриальный парк «Черняховск»). Это крупнейший в Восточной Европе завод по производству солнечных пластин и ячеек.',
                    'В ходе реализации проекта была выполнена корректировка проектной документации с прохождением государственной экспертизы, разработка рабочей документации в BIM, выполнение строительных работ «под ключ», включая полный объем электромеханических работ.',
                  ],
                },
                {
                  title: ['Аэропорт «Магадан»'],
                  headerInfo: ['2024 - настоящее время','Электрические и механические работы','LIMAKMARASH'],
                  description: [
                    'В рамках реализации проекта ведётся строительство нового аэровокзального комплекса внутренних воздушных авиалиний Международного аэропорта Магадан.',
                    'Строительство новой привокзальной площади, новой распределительной электрической подстанции 10кВ, очистных сооружений и других вспомогательных объектов.',
                    'Новый терминал Международного аэропорта Магадан будет оснащен 2 телескопическими трапами и автоматической системой обработки багажа, в нем будут реализованы современные технологии обслуживания пассажиров.',
                  ],
                },
              ]
            },

            servicePage: [
              {
                title: 'ЭЛЕКТРИЧЕСКИЕ СИЛОВЫЕ СИСТЕМЫ',
                description: [
                  '➤ ЭС: Электроснабжение',
                  '➤ ЭМ: Электрооборудование',
                  '➤ ЭГ: Молниезащита и заземление',
                  '➤ АСКУЭ: Автоматизированная система контроля и учета электроэнергии',
                ],
              },
              {
                title: 'СЛАБОТОЧНЫЕ СИСТЕМЫ',
                description: [
                  "АПС Система автоматической пожарной сигнализации",
                  "АСПЗ Система автоматизации противо дымной защиты",
                  "СОУЭ Система оповещения и управления эвакуацией людей при пожаре",
                  "СКУД Система контроля и управления доступом",
                  "СВН Система видеонаблюдения",
                  "СКС Структурированная кабельная система",
                  "СРФ Система радиофикации",
                  "СПП Автоматическая парковочная система (система платной парковки)",
                  "ОС Система охранной сигнализации",
                  "ТС Система тревожной сигнализации",
                  "ЭЧ Система электрочасофикации",
                  "СЭС Система экстренной связи для маломобильных групп населения",
                  ],
              },
              {
                title: 'МЕХАНИЧЕСКИЕ ИНЖЕНЕРНЫЕ СИСТЕМЫ',
                description: [
                  "ОВ Отопление вентиляция и кондиционирование",
                  "ОВ1 Система отопления и теплоснабжения",
                  "ОВ2 Система обще-обменной вентиляции",
                  "ОВ3 Система кондиционирования",
                  "ОВ4 Система противо дымной вентиляции",
                  "ВК Канализация",
                  "ВК1 Внутренние системы канализации",
                  "ВК2 Ливневая канализация",
                  "ВК3 Производственная канализация",
                  "ВВ Система водоснабжения",
                  "ХС Система холодоснабжения",
                  "АУПТ Автоматические установки водяного пожаротушения",
                  "ВПВ Внутренний противопожарный водопровод",
                ]
              },
            ]
          },
      }
    },
  });

export default i18n;
