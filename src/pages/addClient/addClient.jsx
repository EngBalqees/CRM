import React, { useState } from 'react';
import "../addClient/addClient.css";

function AddClientForm() {
  const initialCustomers = [
    {
      fullName: "Balqees Sukar",
      email: 'balqeessuker@gmail.com',
      phone: '0569664251',
      company: 'al yones',
      address: 'azzoun',
      birthDate: '1/1/2000'
    }
  ];
 
  const [customer, setCustomer] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    address: ''
  });

  const [showForm, setShowForm] = useState(false); // التحكم في إظهار النموذج
  const [customers, setCustomers] = useState(initialCustomers); // قائمة العملاء المضافة
  const [isEditing, setIsEditing] = useState(false); // حالة التعديل
  const [editIndex, setEditIndex] = useState(null); // العميل الذي يتم تعديله
  const [showToast, setShowToast] = useState(false); // حالة عرض الرسالة
  const [showDeleteToast, setShowDeleteToast] = useState(false);
  // تحديث الحقول عند الكتابة
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };
  // عرض رسالة نجاح
  const showSuccessToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
  const showDeleteSuccessToast = () => {
    setShowDeleteToast(true);
    setTimeout(() => setShowDeleteToast(false), 2000);
  };
  // إضافة أو تعديل العميل
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedCustomers = [...customers];
      updatedCustomers[editIndex] = customer;
      setCustomers(updatedCustomers);
      setIsEditing(false);
    } else {
      setCustomers([...customers, customer]);
    }
    setCustomer({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      address: '',
      birthDate: ''
    });
    setShowForm(false); // إخفاء النموذج بعد الإضافة
    showSuccessToast(); // عرض رسالة النجاح
  };

  // بدء تعديل العميل
  const handleEdit = (index) => {
    setCustomer(customers[index]);
    setEditIndex(index);
    setIsEditing(true);
    setShowForm(true); // إظهار النموذج للتعديل
  };


  // وظيفة حذف العميل
  const handleDelete = (index) => {
    const confirmed = window.confirm('هل أنت متأكد من حذف هذا العميل؟');
    if (confirmed) {
      const updatedCustomers = customers.filter((_, i) => i !== index);
      setCustomers(updatedCustomers);
      showDeleteSuccessToast();
    }
  };
  // إلغاء العملية
  const handleCancel = () => {
    setCustomer({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      address: '',
      birthDate: ''
    });
    setShowForm(false);
    setIsEditing(false);
  };


  return (
    <div className="form-container">
      {/* عرض بيانات العملاء */}
      {customers.length > 0 && (
        <div className="customer-display">
          <h3>العملاء المضافون</h3>
          {customers.map((cust, index) => (
            <div key={index} className="customer-card">
              <div className='customer-details'>
                <p><strong>الاسم:</strong> {cust.fullName}</p>
                <p><strong>البريد الإلكتروني:</strong> {cust.email}</p>
                <p><strong>رقم الهاتف:</strong> {cust.phone}</p>
                <p><strong>الشركة:</strong> {cust.company}</p>
                <p><strong>العنوان:</strong> {cust.address}</p>
                <p><strong>تاريخ الميلاد:</strong> {cust.birthDate}</p>
              </div>
              <div className="customer-actions">
                <button className="btn-edit" onClick={() => handleEdit(index)}>تعديل</button>
                <button className="btn-delete" onClick={() => handleDelete(index)}>حذف</button>
              </div>
            </div>
          ))}
        </div>
      )}


      {/* زر لإظهار النموذج */}
      {!showForm && (
        <button className="btn-primary" onClick={() => setShowForm(true)}>
          + إضافة عميل جديد
        </button>
      )}

      {/* النموذج لإضافة أو تعديل العملاء */}
      {showForm && (
        <form onSubmit={handleSubmit} className="customer-form">
          <div className="form-group">
            <label>الاسم الكامل</label>
            <input
              type="text"
              name="fullName"
              value={customer.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={customer.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>رقم الهاتف</label>
            <input
              type="tel"
              name="phone"
              value={customer.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label>اسم الشركة</label>
            <input
              type="text"
              name="company"
              value={customer.company}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label>العنوان</label>
            <input
              type="text"
              name="address"
              value={customer.address}
              onChange={handleInputChange}
            />
          </div>
          {/* حقل تاريخ الميلاد */}
          <div className="form-group">
            <label>تاريخ الميلاد</label>
            <input
              type="date"
              name="birthDate"
              value={customer.birthDate}
              onChange={handleInputChange}
              required
            />
          </div>


          <div className="form-actions">
            <button type="submit" className="btn-primary">{isEditing ? 'حفظ التعديل' : 'حفظ'}</button>
            <button type="button" className="btn-cancel" onClick={handleCancel}>إلغاء</button>
          </div>
        </form>
      )}
      {showToast && (
        <div className="toast show">تم إضافة العميل بنجاح!</div>
      )}
      {showDeleteToast && (
        <div className="toast show delete">تم حذف العميل بنجاح!</div>
      )}



    </div>
  );
};

export default AddClientForm;
