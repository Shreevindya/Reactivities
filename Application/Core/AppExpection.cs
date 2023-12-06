namespace Application.Core
{
    public class AppExpection
    {
        public AppExpection(int statusCode, string v)
        {
            StatusCode = statusCode;
        }


        public AppExpection(int statuscode , string message , string details)
        {
            Statuscode = statuscode;
            Message = message;
            Details = details;

        }


        public int StatusCode { get; set; }
        public int Statuscode { get; }

        public string Message { get; set; }
        public string Details { get; set; }
    }
}