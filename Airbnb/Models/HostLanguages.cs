using System.ComponentModel.DataAnnotations;

namespace Catbnb.Models
{
    public class HostLanguages
    {
        public int Id { get; set; }

        [StringLength(30)]
        [Required]
        public string Name { get; set; } = string.Empty;
    }
}
