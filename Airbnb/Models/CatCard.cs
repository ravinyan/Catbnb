namespace Airbnb.Models
{
	public class CatCard
	{
		public int Id { get; set; }


        //public BookingInfoModel? BookingInfo { get; set; }


        public int HostId { get; set; }
        public User? Host { get; set; }


        //public ICollection<CatCardImagesModel>? Images { get; set; } 


        public ICollection<Amenities>? Amenities { get; set; }
	}
}