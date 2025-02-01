import React, { ReactNode } from "react";

interface ContactDetailProps {
  icon: ReactNode;
  detail: string;
  description: string;
}

const ContactDetail = ({ icon, detail, description }: ContactDetailProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="border p-2 w-fit rounded-full bg-primary/20">{icon}</div>
      <div>
        <h1 className="tracking-tight font-semibold">{detail}</h1>
        <p className="text-mutedtext text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ContactDetail;
