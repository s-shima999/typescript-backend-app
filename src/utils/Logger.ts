import * as Log4js from 'log4js';
import Config from '../Config';

export default class Logger{
  
    private static logger:Log4js.Logger;

    /**
     * 
    */
    private static init(): void{
        Log4js.configure(Config.LOG_FILE_PATH);
        this.logger = Log4js.getLogger();
    }

    /**
     * 
     * @param message 
     * @param args 
     */
    public static debug(
        message: any,
        ...args: any[]
    ):void{
        if (this.logger === undefined) this.init();
        this.logger.debug(message, ...args);
    }

    /**
     * 
     * @param message 
     * @param args 
     */
    public static info(
        message: any,
        ...args: any[]
    ):void{
        if (this.logger === undefined) this.init();
        this.logger.info(message, ...args);
    }

    /**
     * 
     * @param message 
     * @param args 
     */
    public static warn(
        message: any,
        ...args: any[]
    ):void{
        if (this.logger === undefined) this.init();
        this.logger.warn(message, ...args);
    }

    /**
     * 
     * @param message 
     * @param args 
     */
    public static error(
        message: any,
        ...args: any[]
    ):void{
        if (this.logger === undefined) this.init();
        this.logger.error(message, ...args);
    }

    /**
     * 
     * @param message 
     * @param args 
     */
    public static fatal(
        message: any,
        ...args: any[]
    ):void{
        if (this.logger === undefined) this.init();
        this.logger.fatal(message, ...args);
    }
}
