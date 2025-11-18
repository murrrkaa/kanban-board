import { useAuthStore } from "@entities/auth/model/use-auth-store.ts";
import { profile } from "@shared/ui/image/profile/profile.ts";
import { Title } from "@shared/ui/components/title";
import { EditAttribute } from "@shared/ui/components/edit-attribute/ui";
import { useState } from "react";

export const ProfileCard = () => {
  const [editableLabel, setEditableLabel] = useState("");

  const user = useAuthStore.getState().user;
  const userInitials = `${user?.name[0]}.${user?.surname?.[0] ?? ""}. `;
  const userName = `${user?.name} ${user?.surname ?? ""}`;

  return (
    <div className="w-[50%] min-w-[50%] bg-white rounded-[20px] h-[calc(100vh-200px)] min-h-fit">
      <div className="w-full h-fit p-[15px] relative text-center">
        <img src={profile.background} className="w-full h-[130px]]" />
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white w-[75px] h-[75px] bg-gradient-to-r from-blue-800 via-purple-600 to-purple-800 rounded-full text-white font-medium flex items-center justify-center text-[20px]">
          {userInitials}
        </div>
      </div>
      <Title
        size="xs"
        className="w-full flex items-center justify-center mt-[30px]"
      >
        {userName}
      </Title>
      <div className="w-full p-[30px] mt-[20px] flex flex-col">
        <EditAttribute
          label="Имя"
          value="Egorova"
          editableLabel={editableLabel}
          onChangeMode={setEditableLabel}
        />
        <EditAttribute
          label="Фамилия"
          value="Egorova"
          editableLabel={editableLabel}
          onChangeMode={setEditableLabel}
        />
        <EditAttribute
          label="Отчество"
          value="Egorova"
          editableLabel={editableLabel}
          onChangeMode={setEditableLabel}
        />
        <EditAttribute
          label="Логин"
          value="Egorova"
          editableLabel={editableLabel}
          onChangeMode={setEditableLabel}
        />
      </div>
    </div>
  );
};
