import React from 'react';
import { Helmet } from 'react-helmet';

export default function TermsAndConditions() {
  return (
    <section className="font-[Roboto] text-[#0f1b33] bg-white">
      <Helmet>
        <title>Terms And Conditions- Inkarp Instruments Private Ltd.</title>
      </Helmet>
      {/* Banner Section */}
      <div className="bg-[#E63946] py-10 px-4 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-[MaxOT]">Terms & Conditions</h1>
        <p className="text-sm md:text-base mt-2">Effective Date: <strong>March 3, 2025</strong></p>
      </div>

      <div className="max-w-5xl mx-auto p-4 md:p-8 space-y-8">
        {/* 1. Company Information */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">1. Company Information</h2>
          <p className="font-semibold">1.1 <span className="text-[#E63946]">Inkarp Instruments Pvt. Ltd.</span></p>
          <p><strong>Address:</strong> Plot No - 5A/10-11, 3rd Floor, IDA Nacharam, Road No. 1, Chilka Nagar Main Rd, Nacharam, Hyderabad, Telangana 500076.</p>
          <p className="mb-4"><strong>GST Number:</strong> 36AABCI2728R1Z4</p>

          <p className="font-semibold">1.2 <span className="text-[#E63946]">Inkarp Instruments Services</span></p>
          <p><strong>Address:</strong> Plot No - 5A/10-11, 2nd Floor, IDA Nacharam, Road No. 1, Chilka Nagar Main Rd, Nacharam, Hyderabad, Telangana 500076.</p>
          <p><strong>GST Number:</strong> 36AABFI9315B1ZQ</p>
        </div>

        {/* 2. Applicability */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">2. Applicability</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Applies to all sales</strong> of products, spares, accessories, and services by Inkarp.</li>
            <li>Placing an order implies <strong>acknowledgement and acceptance</strong> of these T&Cs.</li>
            <li><strong>Subject to change</strong> without prior notice. Refer to <span className="text-blue-600 underline">www.inkarp.co.in</span> for latest version.</li>
          </ul>
        </div>

        {/* 3. Quotations & Orders */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">3. Quotations & Orders</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Quotation validity:</strong> 30 days unless stated otherwise.</li>
            <li><strong>Order confirmation:</strong> Only in writing by Inkarp.</li>
            <li>Orders <strong>cannot be cancelled</strong> without Inkarp's written approval.</li>
            <li>Minimum order value requirements may apply.</li>
          </ul>
        </div>

        {/* 4. Pricing, Payment & Ownership Retention */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">4. Pricing, Payment & Ownership Retention</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>All prices in INR</strong> unless specified otherwise.</li>
            <li><strong>Excludes:</strong> GST, freight, packaging, duties, and insurance.</li>
            <li><strong>GST:</strong> Applied at prevailing rate during billing.</li>
            <li><strong>SEZ GST exemption:</strong> granted only upon receiving valid documents <strong>before invoicing</strong>.</li>
            <li><strong>Ownership:</strong> retained by Inkarp until full payment is received.</li>
            <li><strong>Repossession right:</strong> If delayed beyond 90 days from due date.</li>
          </ul>
        </div>

        {/* 5. Delivery, Shipment & Risk of Loss */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">5. Delivery, Shipment & Risk of Loss</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Estimated delivery dates</strong> may vary due to external factors.</li>
            <li>Supply is on <strong>Ex-Works (Hyderabad)</strong> basis unless agreed otherwise.</li>
            <li><strong>Risk & title:</strong> Pass to buyer upon carrier handover.</li>
            <li><strong>Inkarp is not liable</strong> for delays or transit damage after handover.</li>
            <li>Partial shipments are <strong>allowed and invoiced separately</strong>.</li>
          </ul>
        </div>

        {/* 6. Order Cancellation & Returns */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">6. Order Cancellation & Returns</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Confirmed orders</strong> are non-cancellable without agreement.</li>
            <li>Returns allowed for <strong>wrong products</strong> or <strong>defects reported within 7 days</strong>.</li>
            <li>Returns require <strong>RMA approval</strong> from Inkarp.</li>
            <li><strong>25% restocking fee</strong> applies to non-defective returns.</li>
          </ul>
        </div>

        {/* 7. Warranty Policy */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">7. Warranty Policy</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>Standard warranty:</strong> 12 months from shipment for manufacturing defects.</li>
            <li><strong>Excludes:</strong> Consumables, wear & tear parts (e.g. seals, filters, tubing).</li>
            <li><strong>Void if:</strong> Misused, modified, or serviced by unauthorized personnel.</li>
            <li><strong>Coverage:</strong> Repair or replacement only, no refunds.</li>
          </ul>
        </div>

        {/* 8. Foreign Currency Orders */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">8. Foreign Currency Orders – OEM Responsibility</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li><strong>OEM responsible</strong> for performance, warranty, and service.</li>
            <li><strong>Inkarp acts as facilitator only</strong>; not liable for OEM issues.</li>
            <li><strong>Legal claims</strong> must be addressed directly to the OEM.</li>
          </ul>
        </div>

        {/* 9. Governing Law & Jurisdiction */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">9. Governing Law & Jurisdiction</h2>
          <p><strong>Applicable Law:</strong> Indian Law.</p>
          <p><strong>Jurisdiction:</strong> Courts in Hyderabad, Telangana.</p>
        </div>

        {/* 10. Customer Data & Privacy */}
        <div>
          <h2 className="text-xl font-bold font-[MaxOT] text-[#E63946] mb-2">10. Customer Data & Privacy</h2>
          <p><strong>Inkarp may collect and store Buyer data</strong> for processing orders, compliance, and customer service.</p>
          <p>This data <strong>may be shared with logistics partners or auditors</strong> for operational needs.</p>
        </div>
      </div>
    </section>
  );
}