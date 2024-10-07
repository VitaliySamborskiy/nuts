export function selectsFormRenders(supportClass = null) {
    return `<div class="select ${supportClass ? supportClass.selectCountry : "registration__select-country"}">
                                    <div class="inputs-select__header select__header ${supportClass ? supportClass.header : ""}">
                                        <span class="select__current ${supportClass ? supportClass.currentCountry : "registration__current-country"}">Страна</span>
                                        <svg class="select__svg inputs-select__svg">
                                            <use href="#arrow_down"></use>
                                        </svg>
                                    </div>
                                    <ul class="select__body inputs-select__body ${supportClass ? supportClass.body : ""}">
                                        <li class="select__item inputs-select__item">Україна</li>
                                        <li class="select__item inputs-select__item">Молдова</li>
                                        <li class="select__item inputs-select__item">Польща</li>
                                        <li class="select__item inputs-select__item">Румунія</li>
                                        <li class="select__item inputs-select__item">Німеччина</li>
                                    </ul>
                                </div>
                                <div class="select ${supportClass ? supportClass.selectRegion : "registration__select-region"}">
                                    <div
                                        class="inputs-select__header inputs-select__header-inactive select__header ${supportClass ? supportClass.subClass : "region"} ${supportClass ? supportClass.header : ""}"
                                    >
                                        <span class="select__current ${supportClass ? supportClass.currentRegion : "registration__current-region"}">Область</span>
                                        <svg class="select__svg inputs-select__svg">
                                            <use href="#arrow_down"></use>
                                        </svg>
                                    </div>
                                    <ul
                                        class="hidden select__body inputs-select__body inputs-select__body-wrapper ${supportClass ? supportClass.subBodyClass : ""} ${supportClass ? supportClass.body : ""}"
                                        data-region="Україна"
                                        data-administrative="Область"
                                    >
                                        <li class="select__item inputs-select__item">Вінницька область</li>
                                        <li class="select__item inputs-select__item">Волинська область</li>
                                        <li class="select__item inputs-select__item">Дніпропетровська область</li>
                                        <li class="select__item inputs-select__item">Донецька область</li>
                                        <li class="select__item inputs-select__item">Житомирська область</li>
                                        <li class="select__item inputs-select__item">Закарпатська область</li>
                                        <li class="select__item inputs-select__item">Запорізька область</li>
                                        <li class="select__item inputs-select__item">Івано-Франківська область</li>
                                        <li class="select__item inputs-select__item">Київська область</li>
                                        <li class="select__item inputs-select__item">Кіровоградська область</li>
                                        <li class="select__item inputs-select__item">Луганська область</li>
                                        <li class="select__item inputs-select__item">Львівська область</li>
                                        <li class="select__item inputs-select__item">Миколаївська область</li>
                                        <li class="select__item inputs-select__item">Одеська область</li>
                                        <li class="select__item inputs-select__item">Полтавська область</li>
                                        <li class="select__item inputs-select__item">Рівненська область</li>
                                        <li class="select__item inputs-select__item">Сумська область</li>
                                        <li class="select__item inputs-select__item">Тернопільська область</li>
                                        <li class="select__item inputs-select__item">Харківська область</li>
                                        <li class="select__item inputs-select__item">Херсонська область</li>
                                        <li class="select__item inputs-select__item">Хмельницька область</li>
                                        <li class="select__item inputs-select__item">Черкаська область</li>
                                        <li class="select__item inputs-select__item">Чернівецька область</li>
                                        <li class="select__item inputs-select__item">Чернігівська область</li>
                                        <li class="select__item inputs-select__item">Автономна Республіка Крим</li>
                                        <li class="select__item inputs-select__item">м. Київ</li>
                                        <li class="select__item inputs-select__item">м. Севастополь</li>
                                    </ul>

                                    <ul
                                        class="hidden select__body inputs-select__body inputs-select__body-wrapper ${supportClass ? supportClass.subBodyClass : ""} ${supportClass ? supportClass.body : ""}"
                                        data-region="Молдова"
                                        data-administrative="Район"
                                    >
                                        <li class="select__item inputs-select__item">Анений Ной</li>
                                        <li class="select__item inputs-select__item">Басарабяска</li>
                                        <li class="select__item inputs-select__item">Бричани</li>
                                        <li class="select__item inputs-select__item">Бєльці</li>
                                        <li class="select__item inputs-select__item">Кагул</li>
                                        <li class="select__item inputs-select__item">Кантемир</li>
                                        <li class="select__item inputs-select__item">Каларяш</li>
                                        <li class="select__item inputs-select__item">Чимішлія</li>
                                        <li class="select__item inputs-select__item">Кріулень</li>
                                        <li class="select__item inputs-select__item">Дондюшани</li>
                                        <li class="select__item inputs-select__item">Дубесарь</li>
                                        <li class="select__item inputs-select__item">Єдинець</li>
                                        <li class="select__item inputs-select__item">Фалешть</li>
                                        <li class="select__item inputs-select__item">Флорешть</li>
                                        <li class="select__item inputs-select__item">Глодяни</li>
                                        <li class="select__item inputs-select__item">Хинчешть</li>
                                        <li class="select__item inputs-select__item">Єлова</li>
                                        <li class="select__item inputs-select__item">Яловень</li>
                                        <li class="select__item inputs-select__item">Кагул</li>
                                        <li class="select__item inputs-select__item">Кантарь</li>
                                        <li class="select__item inputs-select__item">Кахул</li>
                                        <li class="select__item inputs-select__item">Кишинів</li>
                                        <li class="select__item inputs-select__item">Леова</li>
                                        <li class="select__item inputs-select__item">Ніспорень</li>
                                        <li class="select__item inputs-select__item">Окниця</li>
                                        <li class="select__item inputs-select__item">Орхей</li>
                                        <li class="select__item inputs-select__item">Резина</li>
                                        <li class="select__item inputs-select__item">Ришкань</li>
                                        <li class="select__item inputs-select__item">Сорока</li>
                                        <li class="select__item inputs-select__item">Шолданешть</li>
                                        <li class="select__item inputs-select__item">Штефан-Воде</li>
                                        <li class="select__item inputs-select__item">Страшень</li>
                                        <li class="select__item inputs-select__item">Сундер</li>
                                        <li class="select__item inputs-select__item">Тараклія</li>
                                        <li class="select__item inputs-select__item">Теленешть</li>
                                        <li class="select__item inputs-select__item">Унгень</li>
                                        <li class="select__item inputs-select__item">Гагаузія</li>
                                    </ul>

                                    <ul
                                        class="hidden select__body inputs-select__body inputs-select__body-wrapper ${supportClass ? supportClass.subBodyClass : ""} ${supportClass ? supportClass.body : ""}"
                                        data-region="Польща"
                                        data-administrative="Воєводство"
                                    >
                                        <li class="select__item inputs-select__item">Нижньосілезьке воєводство</li>
                                        <li class="select__item inputs-select__item">Куявсько-Поморське воєводство</li>
                                        <li class="select__item inputs-select__item">Люблінське воєводство</li>
                                        <li class="select__item inputs-select__item">Любуське воєводство</li>
                                        <li class="select__item inputs-select__item">Лодзьке воєводство</li>
                                        <li class="select__item inputs-select__item">Малопольське воєводство</li>
                                        <li class="select__item inputs-select__item">Мазовецьке воєводство</li>
                                        <li class="select__item inputs-select__item">Опольське воєводство</li>
                                        <li class="select__item inputs-select__item">Підкарпатське воєводство</li>
                                        <li class="select__item inputs-select__item">Підляське воєводство</li>
                                        <li class="select__item inputs-select__item">Поморське воєводство</li>
                                        <li class="select__item inputs-select__item">Сілезьке воєводство</li>
                                        <li class="select__item inputs-select__item">Свентокшиське воєводство</li>
                                        <li class="select__item inputs-select__item">
                                            Вармінсько-Мазурське воєводство
                                        </li>
                                        <li class="select__item inputs-select__item">Великопольське воєводство</li>
                                        <li class="select__item inputs-select__item">Західнопоморське воєводство</li>
                                    </ul>

                                    <ul
                                        class="hidden select__body inputs-select__body inputs-select__body-wrapper ${supportClass ? supportClass.subBodyClass : ""} ${supportClass ? supportClass.body : ""}"
                                        data-region="Румунія"
                                        data-administrative="Повіт"
                                    >
                                        <li class="select__item inputs-select__item">Алба повіт</li>
                                        <li class="select__item inputs-select__item">Арад повіт</li>
                                        <li class="select__item inputs-select__item">Аргеш повіт</li>
                                        <li class="select__item inputs-select__item">Бакеу повіт</li>
                                        <li class="select__item inputs-select__item">Біхор повіт</li>
                                        <li class="select__item inputs-select__item">Бистриця-Несеуд повіт</li>
                                        <li class="select__item inputs-select__item">Ботошань повіт</li>
                                        <li class="select__item inputs-select__item">Брашов повіт</li>
                                        <li class="select__item inputs-select__item">Бреїла повіт</li>
                                        <li class="select__item inputs-select__item">Бухарест муніципій</li>
                                        <li class="select__item inputs-select__item">Бузеу повіт</li>
                                        <li class="select__item inputs-select__item">Караш-Северін повіт</li>
                                        <li class="select__item inputs-select__item">Келераш повіт</li>
                                        <li class="select__item inputs-select__item">Клуж повіт</li>
                                        <li class="select__item inputs-select__item">Констанца повіт</li>
                                        <li class="select__item inputs-select__item">Ковасна повіт</li>
                                        <li class="select__item inputs-select__item">Димбовіца повіт</li>
                                        <li class="select__item inputs-select__item">Долж повіт</li>
                                        <li class="select__item inputs-select__item">Галац повіт</li>
                                        <li class="select__item inputs-select__item">Джурджу повіт</li>
                                        <li class="select__item inputs-select__item">Горж повіт</li>
                                        <li class="select__item inputs-select__item">Харгіта повіт</li>
                                        <li class="select__item inputs-select__item">Хунедоара повіт</li>
                                        <li class="select__item inputs-select__item">Яломіца повіт</li>
                                        <li class="select__item inputs-select__item">Ясси повіт</li>
                                        <li class="select__item inputs-select__item">Ілфов повіт</li>
                                        <li class="select__item inputs-select__item">Марамуреш повіт</li>
                                        <li class="select__item inputs-select__item">Мехедінць повіт</li>
                                        <li class="select__item inputs-select__item">Муреш повіт</li>
                                        <li class="select__item inputs-select__item">Нямц повіт</li>
                                        <li class="select__item inputs-select__item">Олт повіт</li>
                                        <li class="select__item inputs-select__item">Прахова повіт</li>
                                        <li class="select__item inputs-select__item">Селаж повіт</li>
                                        <li class="select__item inputs-select__item">Сату-Маре повіт</li>
                                        <li class="select__item inputs-select__item">Сібіу повіт</li>
                                        <li class="select__item inputs-select__item">Сучава повіт</li>
                                        <li class="select__item inputs-select__item">Телеорман повіт</li>
                                        <li class="select__item inputs-select__item">Тіміш повіт</li>
                                        <li class="select__item inputs-select__item">Тулча повіт</li>
                                        <li class="select__item inputs-select__item">Вилча повіт</li>
                                        <li class="select__item inputs-select__item">Васлуй повіт</li>
                                        <li class="select__item inputs-select__item">Вранча повіт</li>
                                    </ul>

                                    <ul
                                        class="hidden select__body inputs-select__body inputs-select__body-wrapper ${supportClass ? supportClass.subBodyClass : ""} ${supportClass ? supportClass.body : ""}"
                                        data-region="Німеччина"
                                        data-administrative="Федеральна земля"
                                    >
                                        <li class="select__item inputs-select__item">Баден-Вюртемберг</li>
                                        <li class="select__item inputs-select__item">Баварія</li>
                                        <li class="select__item inputs-select__item">Берлін</li>
                                        <li class="select__item inputs-select__item">Бранденбург</li>
                                        <li class="select__item inputs-select__item">Бремен</li>
                                        <li class="select__item inputs-select__item">Гамбург</li>
                                        <li class="select__item inputs-select__item">Гессен</li>
                                        <li class="select__item inputs-select__item">Мекленбург-Передня Померанія</li>
                                        <li class="select__item inputs-select__item">Нижня Саксонія</li>
                                        <li class="select__item inputs-select__item">Північний Рейн-Вестфалія</li>
                                        <li class="select__item inputs-select__item">Рейнланд-Пфальц</li>
                                        <li class="select__item inputs-select__item">Саксонія</li>
                                        <li class="select__item inputs-select__item">Саксонія-Ангальт</li>
                                        <li class="select__item inputs-select__item">Шлезвіг-Гольштейн</li>
                                        <li class="select__item inputs-select__item">Тюрінгія</li>
                                    </ul>
                                </div>`;
}
