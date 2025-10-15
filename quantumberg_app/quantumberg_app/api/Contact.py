# # File: quantumberg_app/api/contact.py (you can place this under your custom app)
# import frappe
# from frappe import _

# @frappe.whitelist(allow_guest=True)
# def submit_contact():
#     data = frappe.local.form_dict

#     name = data.get("name")
#     mobile = data.get("mobile")
#     email = data.get("email")
#     how_found = data.get("how_found")
#     service = data.get("service")
#     message = data.get("message")

#     # Validate required fields
#     if not (name and mobile and email):
#         frappe.throw(_("Name, Mobile, and Email are required."))

#     # Optionally: Validate email format
#     if "@" not in email:
#         frappe.throw(_("Please enter a valid email address."))

#     # Optionally: Save as a custom DocType if needed (e.g., "Contact Submission")
#     # frappe.get_doc({
#     #     "doctype": "Contact Submission",
#     #     "name": name,
#     #     "mobile": mobile,
#     #     "email": email,
#     #     "how_found": how_found,
#     #     "service": service,
#     #     "message": message
#     # }).insert(ignore_permissions=True)

#     # Send email notification to site admin
#     frappe.sendmail(
#         recipients=["your@email.com"],  # ✅ Change this to your support/admin email
#         sender=email,
#         subject="New Contact Form Submission",
#         message=f"""
#             <b>Name:</b> {name}<br>
#             <b>Mobile:</b> {mobile}<br>
#             <b>Email:</b> {email}<br>
#             <b>How did they find us:</b> {how_found or "-"}<br>
#             <b>Service Interested:</b> {service or "-"}<br>
#             <b>Message:</b> {message or "-"}
#         """
#     )

#     return {"message": "Your enquiry has been submitted successfully!"}
# Importing necessary modules from the Frappe framework
import frappe
import json

@frappe.whitelist(allow_guest=True)
def submit_contact():
    try:
        data = json.loads(frappe.request.data)
    except Exception:
        return {"message": "Invalid JSON data"}

    # Extract fields
    name = data.get("name")
    mobile = data.get("mobile")
    email = data.get("email")
    how_found = data.get("how_found")
    service = data.get("service")
    message = data.get("message")

    if not (name and mobile and email):
        return {"message": "Required fields missing"}, 400

    # Send email
    frappe.sendmail(
        recipients=["wequantumberg@gmail.com"],
        sender=email,
        subject="New Contact Form Submission",
        message=f"""
            <b>Name:</b> {name}<br>
            <b>Mobile:</b> {mobile}<br>
            <b>Email:</b> {email}<br>
            <b>How did they find us:</b> {how_found or "-"}<br>
            <b>Service Interested:</b> {service or "-"}<br>
            <b>Message:</b> {message or "-"}
        """
    )

    return {"message": "Message submitted successfully"}
