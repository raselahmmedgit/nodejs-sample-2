import {MessageHelper} from "../helper/message-helper";

export class ResultModel {
    Success: boolean;
    Error: string;
    ErrorType: string;
    ParentId: number;
    ParentName: string;
    UploadPath: string;

    constructor(success: boolean, error: string, errorType: string) {
        this.Success = success;
        this.Error = error;
        this.ErrorType = errorType;
    }
    
    Info(error?: string) {
        return {
            Success: false,
            Error: error ?? MessageHelper.Info,
            ErrorType: MessageHelper.MessageTypeInfo
        };
    }

    Warning(error?: string) {
        return {
            Success: false,
            Error: error ?? MessageHelper.Warning,
            ErrorType: MessageHelper.MessageTypeWarning
        };
    }

    Fail(error?: string) {
        return {
            Success: false,
            Error: error ?? MessageHelper.Error,
            ErrorType: MessageHelper.MessageTypeDanger
        };
    }

    Ok(error?: string) {
        return {
            Success: true,
            Error: error ?? MessageHelper.Success,
            ErrorType: MessageHelper.MessageTypeSuccess
        };
    }

}