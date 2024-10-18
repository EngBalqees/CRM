import React from 'react';
import './showsales.css';
import KPICards from './cards.Jsx';
function OpportunitiesTable() {
    return (
        <>
            <KPICards />
            <div className="opportunities-table">
                <div className="table-header">
                    <input type="text" placeholder="ابحث" />
                    <select>
                        <option>فرصي المفتوحة</option>
                        {/* أضف المزيد من الخيارات حسب الحاجة */}
                    </select>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>نسبة الفوز</th>
                            <th>الاسم</th>
                            <th>الحساب</th>
                            <th>المبلغ</th>
                            <th>تاريخ الإغلاق</th>
                            <th>مرحلة المبيعات</th>
                            <th>الإجراءات</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>95%</td>
                            <td>تحديث البنية التحتية</td>
                            <td>تقنيات بيناكل</td>
                            <td>1,250,000$</td>
                            <td>15/10/2014</td>
                            <td>التفاوض</td>
                            <td><button>عرض</button></td>
                        </tr>
                        {/* أضف المزيد من الصفوف حسب الحاجة */}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default OpportunitiesTable;
