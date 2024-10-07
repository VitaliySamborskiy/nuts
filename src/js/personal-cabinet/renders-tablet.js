export function renderTable(container, button, data) {
    renderHeader(data, container);
    button.addEventListener("click", () => {
        renderHeader(data, container);
    });
}

function renderHeader(data, container) {
    let html = ``;
    html = `<div class="personal-cabinet__table-order-history">
                    <table class="personal-cabinet__table">
                        <thead>
                            <tr class="personal-cabinet__table-header">
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">№ Заказа</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Дата</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Кол - во товаров</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Статус</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Стоимость</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                                <th class="personal-cabinet__table-block-title">
                                    <h3 class="personal-cabinet__table-title">Функции</h3>
                                    <svg class="personal-cabinet__table-svg">
                                        <use href="#arrow_down"></use>
                                    </svg>
                                </th>
                            </tr>
                        </thead>
                      ${data ? renderValueTable(data) : renderDefaultValue()}
                    </table>
                </div>`;

    container.innerHTML = html;
}

function renderValueTable(dataArr) {
    const tableBody = document.createElement("tbody");

    dataArr.forEach((data, index) => {
        let html = ``;
        html += `<tr class="personal-cabinet__table-row">
                                <td class="personal-cabinet__table-value">${data.orderNumber}</td>
                                <td class="personal-cabinet__table-value">${data.date}</td>
                                <td class="personal-cabinet__table-value">${data.quantity}</td>
                                <td class="personal-cabinet__table-value">${data.orderStatus}</td>
                                <td class="personal-cabinet__table-value">${data.orderPrise}</td>
                                <td class="personal-cabinet__table-value">
                                    <div class="personal-cabinet__table-svg-block">
                                        <svg class="personal-cabinet__table-value-svg">
                                            <use href="#eye"></use>
                                        </svg>
                                        <svg class="personal-cabinet__table-value-svg">
                                            <use href="#copying"></use>
                                        </svg>
                                    </div>
                                </td>
                            </tr>`;
        tableBody.innerHTML += html;
    });

    return tableBody;
}

function renderDefaultValue() {
    let html = ``;
    html += `  <tbody>
                      <tr>
                         <td class="personal-cabinet__table-info-text">Замовлення відсутні</td>
                      </tr>
               </tbody>`;

    return html;
}
