namespace Airbnb.Models
{
    public class CatCard
    {
        public int Id { get; set; }

        public int BookingInfoId { get; set; }
        public BookingInfo? BookingInfo { get; set; }

        public int HostId { get; set; }
        public Host? Host { get; set; }

        public ICollection<CatCardImages>? Images { get; set; }

        public ICollection<Amenities>? Amenities { get; set; }
    }
}