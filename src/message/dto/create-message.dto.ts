import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateMessageDto {
  @IsNotEmpty()
  @IsString()
  content: string; // Текст сообщения

  @IsInt()
  userId: number; //  ID пользователя

  @IsInt()
  chatId: number; //  ID чата
}
