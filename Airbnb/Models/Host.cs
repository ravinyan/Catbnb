using System.ComponentModel.DataAnnotations;

namespace Airbnb.Models
{
    public class Host
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public string TimeOnCatbnb { get; set; } = string.Empty;

        public int CatCardId { get; set; }
        public ICollection<CatCard>? CatCards { get; set; }
    }
}
